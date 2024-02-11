import { useQuery } from "@tanstack/react-query";
import supabase from "../../../http/supabase";
import { getApiToken } from "../../../utils/utils";
import type { User } from "@supabase/supabase-js";

export const verifyApiTokenAndGetUser = async () => {
  const { data } = await supabase.get<User>(
    `${import.meta.env.VITE_AUTH_URL}/user`,
    {
      headers: {
        Authorization: `Bearer ${getApiToken()}`,
      },
    }
  );

  return data;
};

export const useVerifyApiTokenAndGetUser = () => {
  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: verifyApiTokenAndGetUser,
    retry: false,
  });

  return { user, error };
};
