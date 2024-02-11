import supabase from "../../../http/supabase";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { getApiToken } from "../../../utils/utils";

interface EditTodoItemArgs {
  id: number;
  title?: string;
  description?: string;
  due_date_time?: string;
  completed?: boolean;
}

export const editTodoItem = async ({ id, ...args }: EditTodoItemArgs) => {
  return supabase.patch(
    `${import.meta.env.VITE_API_URL}/Todos?id=eq.${id}`,
    {
      ...args,
    },
    {
      headers: {
        Authorization: `Bearer ${getApiToken()}`,
        Prefer: "return=minimal",
      },
    }
  );
};

export const useEditTodo = () => {
  const queryClient = useQueryClient();

  const {
    mutate: editTodo,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: editTodoItem,
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
      toast.success("Todo updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { editTodo, isPending, isSuccess, isError };
};
