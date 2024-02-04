import type { User } from "@supabase/supabase-js";

// Type to model the response upon signup and signin with email and password
export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: number;
  refresh_token: string;
  user: User;
}
