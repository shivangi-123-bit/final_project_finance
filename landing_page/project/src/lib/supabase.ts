import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with empty values
// The actual values should be provided through environment variables
export const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
);