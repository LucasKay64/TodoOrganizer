import supabase from "../../../http/supabase";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { getApiToken } from "../../../utils/utils";

interface CreateTodoItemArgs {
  title: string;
  description: string;
  dueDateTime: string;
  todoListId: number;
}

export const createTodoItem = async ({
  title,
  description,
  dueDateTime,
  todoListId,
}: CreateTodoItemArgs) => {
  return supabase.post(
    `${import.meta.env.VITE_API_URL}/Todos`,
    {
      list_id: todoListId,
      title: title,
      description: description,
      due_date_time: dueDateTime,
      completed: false,
    },
    {
      headers: {
        Authorization: `Bearer ${getApiToken()}`,
        Prefer: "return=minimal",
      },
    }
  );
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createTodo,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: createTodoItem,
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
      toast.success("Todo created successfully!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { createTodo, isPending, isSuccess, isError };
};
