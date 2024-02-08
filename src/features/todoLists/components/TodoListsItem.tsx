import * as React from "react";

import { useDeleteTodoList } from "../api/deleteTodoList";
import { useNavigate } from "react-router-dom";

import listIcon from "../../../assets/icons/list-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";

interface TodoListsItemProps {
  id: number;
  title: string;
}

const TodoListsItem = ({ id, title }: TodoListsItemProps) => {
  const { deleteList, isPending } = useDeleteTodoList();
  const navigate = useNavigate();

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
    <li onClick={() => navigate(`/app/${id}`)}>
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
