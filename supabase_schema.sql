-- RESET SCHEMA (Use with caution - cleans previous demo data)
DROP TABLE IF EXISTS public.patrol_logs CASCADE;
DROP TABLE IF EXISTS public.incidents CASCADE;
DROP TABLE IF EXISTS public.checkpoints CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;
DROP TABLE IF EXISTS public.companies CASCADE;

-- 1. Create Companies table (for Multitenancy)
CREATE TABLE public.companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Profiles table (linked to Auth.Users and Companies)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  company_id UUID REFERENCES public.companies(id),
  full_name TEXT,
  role TEXT DEFAULT 'GUARD' CHECK (role IN ('DIRECTOR', 'SUPERVISOR', 'AGENT', 'GUARD', 'CLIENT')),
  zone_id UUID,
  last_gps POINT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Checkpoints table (Linked to Company)
CREATE TABLE public.checkpoints (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES public.companies(id) NOT NULL,
  code TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  location POINT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Create Incidents table (Linked to Company)
CREATE TABLE public.incidents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES public.companies(id) NOT NULL,
  reported_by UUID REFERENCES public.profiles(id),
  type TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  location POINT,
  status TEXT DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'RESOLVED', 'ESCALATING')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Create Patrol Logs table (Linked to Company via Checkpoint)
CREATE TABLE public.patrol_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES public.companies(id) NOT NULL,
  guard_id UUID REFERENCES public.profiles(id),
  checkpoint_id UUID REFERENCES public.checkpoints(id),
  scanned_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Enable Row Level Security (RLS)
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.checkpoints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.incidents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patrol_logs ENABLE ROW LEVEL SECURITY;

-- 7. RLS Policies (Multitenancy & Role-based)

-- Functions for helper checks
CREATE OR REPLACE FUNCTION public.get_user_role() RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.get_user_company() RETURNS UUID AS $$
  SELECT company_id FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER;

-- Policies for Profiles
CREATE POLICY "Users can view profiles in their company" ON public.profiles
  FOR SELECT USING (company_id = public.get_user_company() OR public.get_user_role() = 'DIRECTOR');

CREATE POLICY "Directors can manage all profiles" ON public.profiles
  FOR ALL USING (public.get_user_role() = 'DIRECTOR');

-- Policies for Incidents
CREATE POLICY "Users can view incidents in their company" ON public.incidents
  FOR SELECT USING (company_id = public.get_user_company() OR public.get_user_role() = 'DIRECTOR');

CREATE POLICY "Users can report incidents in their company" ON public.incidents
  FOR INSERT WITH CHECK (company_id = public.get_user_company());

-- Policies for Checkpoints
CREATE POLICY "Users can view checkpoints in their company" ON public.checkpoints
  FOR SELECT USING (company_id = public.get_user_company() OR public.get_user_role() = 'DIRECTOR');

-- Policies for Patrol Logs
CREATE POLICY "Users can view patrol logs in their company" ON public.patrol_logs
  FOR SELECT USING (company_id = public.get_user_company() OR public.get_user_role() = 'DIRECTOR');
