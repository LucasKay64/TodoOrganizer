import supabase from "../../../http/supabase";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { removeApiToken } from "../../../utils/utils";
import { getApiToken } from "../../../utils/utils";
import { useQueryClient } from "@tanstack/react-query";

export const logoutUser = async () => {
  return supabase.post(
    `${import.meta.env.VITE_AUTH_URL}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getApiToken()}`,
      },
    }
  );
};

export const useLogoutUser = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
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
    onSuccess: () => {
      removeApiToken();
      toast.success("Logged out successfully!");
      navigate("/");
      queryClient.setQueryData(["user"], null);
    },
  });

  return { logout, isPending };
};
