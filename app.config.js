// Load .env into process.env and expose needed vars to the Expo app via `extra`.
require('dotenv').config();

module.exports = ({ config }) => {
    return {
        ...config,
        extra: {
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
        },
    };
};
