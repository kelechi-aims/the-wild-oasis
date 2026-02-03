import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zfcnfpmjxxpbekowzyks.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmY25mcG1qeHhwYmVrb3d6eWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzMzU2MzksImV4cCI6MjA4NDkxMTYzOX0.A0wLk8xOARWzFCAVL7CyEO5iFC5zTfRND0YuoXmeYw0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
