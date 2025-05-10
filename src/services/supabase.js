import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dfuxiansqhxlbbfwttov.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

// Création du client
export const supabase = createClient(supabaseUrl, supabaseKey);
