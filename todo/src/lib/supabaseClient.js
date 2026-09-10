import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hjgqagmlrivzzitopvde.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_f5nv4QztPsLN6EV17blWLg_AB3d4Hwv";
export const supabase = createClient(supabaseUrl, supabaseKey);
