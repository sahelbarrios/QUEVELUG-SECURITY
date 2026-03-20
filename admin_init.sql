-- RUN THIS IN SUPABASE SQL EDITOR AFTER CONFIGURING AUTH
-- Replace 'USER_ID' with the Auth UUID of your user 20389331 after they sign up or you create them.

-- 1. Create a Company for testing
INSERT INTO public.companies (name) VALUES ('QUEVELUG ASOCIADOS') ON CONFLICT DO NOTHING;

-- 2. Create the Director Profile
DO $$ 
DECLARE
  comp_id UUID;
BEGIN
  SELECT id INTO comp_id FROM public.companies WHERE name = 'QUEVELUG ASOCIADOS' LIMIT 1;
  
  -- Use a valid UUID from your auth.users table if you already created the user
  -- INSERT INTO public.profiles (id, company_id, full_name, role)
  -- VALUES ('REPLACE_WITH_REAL_UUID', comp_id, 'SAHEL BARRIOS', 'DIRECTOR');
END $$;
