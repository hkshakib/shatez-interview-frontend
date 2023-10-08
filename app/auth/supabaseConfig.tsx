import { createClient } from "@supabase/supabase-js";

const supeBaseUrl = "https://isuimdbuicxneyxwjgzh.supabase.co";
const supeBaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdWltZGJ1aWN4bmV5eHdqZ3poIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2ODgyMzAsImV4cCI6MjAxMjI2NDIzMH0.c7fu4NR9Lzx8TJE5Qssfo7neubjsXFSxcZbalXqssR4";

const supaBase = createClient(supeBaseUrl, supeBaseKey);

export default supaBase;
