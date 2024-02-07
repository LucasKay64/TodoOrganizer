import supabase from "../../../http/supabase";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const createTodoList = async (title: string) => {
  return supabase.post(
    `${import.meta.env.VITE_API_URL}/TodoLists`,
    { title: title },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("api_token")}`,
        Prefer: "return=minimal",
      },
    }
  );
};

export const useCreateTodoList = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createList,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: createTodoList,
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
      toast.success("Todo list created successfully!");
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  return { createList, isPending, isSuccess, isError };
};
