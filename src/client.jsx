import { createClient } from '@supabase/supabase-js'

const URL = 'https://evslnhiryhhlqtqjbwiz.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2c2xuaGlyeWhobHF0cWpid2l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2MjQ5MDgsImV4cCI6MjAxNDIwMDkwOH0.j4BCCRJkNiOvlR69WdSWMEFPLpRI-Kg5qkA8ITOXQIE';

export const supabase = createClient(URL, API_KEY);