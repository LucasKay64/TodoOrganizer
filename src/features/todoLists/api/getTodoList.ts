// import { useQuery } from "@tanstack/react-query";
// import supabase from "../../../http/supabase";
// import { TodoList } from "../types/TodoList";

// export const getTodoList = async (id: number) => {
//   const { data } = await supabase.get<TodoList[]>(
//     `${import.meta.env.VITE_API_URL}/TodoLists?select=title,id&id=eq.${id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("api_token")}`,
//       },
//     }
//   );

//   return data.length > 0 ? data[0] : undefined;
// };

// export const useGetTodoList = (queryKeyId: number) => {
//   const {
//     data: todoList,
//     isPending,
//     error,
//   } = useQuery({
//     queryKey: ["todoList", queryKeyId],
//     queryFn: () => getTodoList(queryKeyId),
//   });

//   return { todoList, isPending, error };
// };
