import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://vfzovcdmhtndjejlqliz.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmem92Y2RtaHRuZGplamxxbGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2ODQ4OTgsImV4cCI6MjAzMTI2MDg5OH0.tMQ1upzOpsQgp344OzGIvw40CDZRoZmg3qgM4uH6URE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
