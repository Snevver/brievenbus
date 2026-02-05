import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY, getSupabaseConfig } from '../config/supabase';

export async function checkIfConnectedToDatabase(): Promise<boolean> {
  try {
    const cfg = getSupabaseConfig();
    const url = cfg.url || SUPABASE_URL;
    const anon = cfg.anonKey || SUPABASE_ANON_KEY;

    if (!url || !anon) return false;

    const supabase = createClient(String(url), String(anon));
    const { data, error } = await supabase.from('db_test').select('connected').limit(1).single();

    // Return false if there's an error or no data
    if (error || !data) return false;

    // Return the actual boolean value from the table
    return data.connected === true;
  } catch {
    return false;
  }
}