const REACT_APP_SUPABASE_URL = 'https://jvwuyenjapsrqqotoier.supabase.co'
const REACT_APP_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2d3V5ZW5qYXBzcnFxb3RvaWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTk1OTIsImV4cCI6MjA3NTQ5NTU5Mn0.d_WgPBc4ipL9d_koMPkK3bTFCcS9zNc9Wp1Wx32mK34'


import {createClient} from "@supabase/supabase-js";

const supabaseUrl = REACT_APP_SUPABASE_URL;
const supabaseKey = REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);