import { useQuery } from "@tanstack/react-query";
import supabase from "../../../http/supabase";
import { Todo } from "../types/Todo";
import { getApiToken } from "../../../utils/utils";

export const getTodos = async (todoListId: number) => {
  const { data } = await supabase.get<Todo[]>(
    `${
      import.meta.env.VITE_API_URL
    }/Todos?select=id,title,description,due_date_time,completed&list_id=eq.${todoListId}&order=due_date_time.asc`,
    {
      headers: {
        Authorization: `Bearer ${getApiToken()}`,
      },
    }
  );

  return data;
};

export const useGetTodos = (queryKeyId: number) => {
  const {
    data: allTodos,
    isPending,
    error,
  } = useQuery({
    queryKey: ["todos", queryKeyId],
    queryFn: () => getTodos(queryKeyId),
  });

  const activeTodos = allTodos?.filter((todo) => !todo.completed);
  const completedTodos = allTodos?.filter((todo) => todo.completed);

  return { allTodos, activeTodos, completedTodos, isPending, error };
};

export const useSelectTodoById = (todoId: number, listId: number) => {
  const { allTodos } = useGetTodos(listId);
  return allTodos?.find((todo) => todo.id === todoId);
};
