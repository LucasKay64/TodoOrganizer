import * as React from "react";

import { useDeleteTodoList } from "../api/deleteTodoList";

import listIcon from "../../../assets/icons/list-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";

interface TodoListsItemProps {
  id: number;
  title: string;
}

const TodoListsItem = ({ id, title }: TodoListsItemProps) => {
  const { deleteList, isPending } = useDeleteTodoList();

  const handleDeleteList = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    deleteList(id);
  };

  if (isPending) {
    return (
      <li className="flex justify-center items-center">
        <span className="loading loading-spinner"></span>
      </li>
    );
  }

  return (
    <li onClick={() => console.log("li")}>
      <a>
        <img src={listIcon} alt="List Icon" className="w-5 h-5" />
        {title}
        <button onClick={handleDeleteList}>
          <img src={deleteIcon} alt="Delete Icon" className="w-5 h-5" />
        </button>
      </a>
    </li>
  );
};

export default TodoListsItem;
