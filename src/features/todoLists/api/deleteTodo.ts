import supabase from "../../../http/supabase";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { getApiToken } from "../../../utils/utils";

export const deleteTodoItem = async (id: number) => {
  return supabase.delete(`${import.meta.env.VITE_API_URL}/Todos?id=eq.${id}`, {
    headers: {
      Authorization: `Bearer ${getApiToken()}`,
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteTodo,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: deleteTodoItem,
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
      toast.success("Todo deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { deleteTodo, isPending, isSuccess, isError };
};
