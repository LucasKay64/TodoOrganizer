import type { SignInWithPasswordCredentials } from "@supabase/supabase-js";
import supabase from "../../../http/supabase";
import { AuthResponse } from "../types/AuthResponse";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setApiToken } from "../../../utils/utils";
import { useQueryClient } from "@tanstack/react-query";

export const loginUserWithEmailAndPassword = async (
  credentials: SignInWithPasswordCredentials
) => {
  return supabase.post<AuthResponse>(
    `${import.meta.env.VITE_AUTH_URL}/token?grant_type=password`,
    credentials
  );
};

export const useLoginUser = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: loginUserWithEmailAndPassword,
    onError: (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.error_description ||
            "An error occurred, please try again later."
        );
      } else {
        toast.error(error.message);
      }
    },
    onSuccess: (response) => {
      setApiToken(response.data.access_token);
      toast.success("Logged in successfully!");
      navigate("/app");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { login, isPending, isSuccess };
};
