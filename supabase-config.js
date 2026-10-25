
const SUPABASE_URL = "https://bwqcbzirecewmpwjngpy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_kxFBdzDu3tRhXsoCDdyQcA_O-td6Tlo";

window.parkourSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
