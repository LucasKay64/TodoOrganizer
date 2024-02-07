import supabase from "../../../http/supabase";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const deleteTodoList = async (id: number) => {
  return supabase.delete(
    `${import.meta.env.VITE_API_URL}/TodoLists?id=eq.${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("api_token")}`,
      },
    }
  );
};

export const useDeleteTodoList = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteList,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: deleteTodoList,
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
      toast.success("Todo list deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  return { deleteList, isPending, isSuccess, isError };
};
