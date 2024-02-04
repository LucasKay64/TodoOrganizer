import axios from "axios";

// axios instance for supabase
const supabase = axios.create();

supabase.interceptors.request.use((config) => {
  config.headers["apikey"] = import.meta.env.VITE_ANON_KEY;
  return config;
});

export default supabase;
