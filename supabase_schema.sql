-- 1. Create Profiles table (linked to Auth.Users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  full_name TEXT,
  role TEXT DEFAULT 'GUARD' CHECK (role IN ('DIRECTOR', 'SUPERVISOR', 'AGENT', 'GUARD', 'CLIENT')),
  zone_id UUID,
  last_gps POINT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Incidents table
CREATE TABLE public.incidents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reported_by UUID REFERENCES public.profiles(id),
  type TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  location POINT,
  status TEXT DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'RESOLVED', 'ESCALATING')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Checkpoints table (QR)
CREATE TABLE public.checkpoints (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  location POINT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Create Patrol Logs table
CREATE TABLE public.patrol_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  guard_id UUID REFERENCES public.profiles(id),
  checkpoint_id UUID REFERENCES public.checkpoints(id),
  scanned_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.incidents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.checkpoints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patrol_logs ENABLE ROW LEVEL SECURITY;

-- 6. Basic RLS Policies (Security Standard)
-- Directors see everything
CREATE POLICY "Directors have full access" ON public.profiles
  FOR ALL USING (auth.jwt() ->> 'role' = 'DIRECTOR');

-- Profiles are viewable by authenticated users
CREATE POLICY "Authenticated users can view profiles" ON public.profiles
  FOR SELECT USING (auth.role() = 'authenticated');

-- Incidents can be reported by anyone authenticated, but viewed based on role
CREATE POLICY "Anyone authenticated can report incidents" ON public.incidents
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
