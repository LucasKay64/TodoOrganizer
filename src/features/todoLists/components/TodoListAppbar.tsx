import toggleListIcon from "../../../assets/icons/toggle-list-icon.svg";

import { useParams } from "react-router-dom";
import { useGetTodoLists } from "../api/getTodoLists";

const TodoListAppbar = () => {
  const { listId } = useParams();
  const { todoLists } = useGetTodoLists();

  const todoList = todoLists?.find((list) => list.id === Number(listId));

  return (
    <div className="navbar">
      <div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost btn-circle md:hidden"
        >
          <img
            src={toggleListIcon}
            alt="Toggle List Icon"
            className="w-5 h-5"
          />
        </label>
        <p className="text-xl">{todoList?.title}</p>
      </div>
    </div>
  );
};

export default TodoListAppbar;
