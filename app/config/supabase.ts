import Constants from 'expo-constants';

function readExtras() {
  return (Constants.expoConfig && Constants.expoConfig.extra) || (Constants.manifest && Constants.manifest.extra) || {};
}

export function getSupabaseConfig() {
  const extras = readExtras();
  return {
    url: extras.SUPABASE_URL ?? process.env.SUPABASE_URL ?? null,
    anonKey: extras.SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? null,
  };
}

export const { url: SUPABASE_URL, anonKey: SUPABASE_ANON_KEY } = getSupabaseConfig();