import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pptpfnolodqhnefrkmfc.supabase.co"; // ← paste your URL here
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwdHBmbm9sb2RxaG5lZnJrbWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNDAyODMsImV4cCI6MjA2NzcxNjI4M30.wRnNBP7bz3MmwjJ3EqE607_GFb47sAoofgs-cQ8TZhg"; // ← paste anon key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
