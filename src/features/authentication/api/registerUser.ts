import type { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import supabase from "../../../http/supabase";
import { AuthResponse } from "../types/AuthResponse";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { setApiToken } from "../../../utils/utils";

export const registerUserWithEmailAndPassword = async (
  credentials: SignUpWithPasswordCredentials
) => {
  return supabase.post<AuthResponse>(
    `${import.meta.env.VITE_AUTH_URL}/signup`,
    credentials
  );
};

export const useRegisterUser = () => {
  const navigate = useNavigate();

  const {
    mutate: register,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: registerUserWithEmailAndPassword,
    onError: (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.msg ||
            "An error occurred, please try again later."
        );
      } else {
        toast.error(error.message);
      }
    },
    onSuccess: (response) => {
      setApiToken(response.data.access_token);
      toast.success("Account created successfully!");
      navigate("/app");
    },
  });

  return { register, isPending, isSuccess };
};
