import { useQuery } from "@tanstack/react-query";
import supabase from "../../../http/supabase";
import { TodoList } from "../types/TodoList";
import { getApiToken } from "../../../utils/utils";

export const getTodoLists = async () => {
  const { data } = await supabase.get<TodoList[]>(
    `${import.meta.env.VITE_API_URL}/TodoLists?select=title,id`,
    {
      headers: {
        Authorization: `Bearer ${getApiToken()}`,
      },
    }
  );

  return data;
};

export const useGetTodoLists = () => {
  const {
    data: todoLists,
    isPending,
    error,
  } = useQuery({
    queryKey: ["todoLists"],
    queryFn: getTodoLists,
  });

  const isEmpty = todoLists?.length === 0;

  return { todoLists, isPending, error, isEmpty };
};
