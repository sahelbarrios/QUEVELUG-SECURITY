import { createBrowserClient } from '@supabase/ssr';

// Browser client using @supabase/ssr
export const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_key'
);
