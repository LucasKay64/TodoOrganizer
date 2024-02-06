import plusIcon from "../../../assets/icons/plus-icon.svg";
import TodoListsItem from "./TodoListsItem";
import Modal from "../../../components/modal/Modal";
import AddTodoListForm from "./AddTodoListForm";

import { useRef } from "react";

const TodoLists = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <ul className="menu w-80 text-base-content">
        <h1 className="menu-title flex justify-between">
          Lists
          <button
            className="btn btn-ghost btn-circle btn-xs"
            onClick={handleOpenModal}
          >
            <img
              src={plusIcon}
              alt="Plus Icon"
              className="w-5 h-5 opacity-40"
            />
          </button>
        </h1>
        <TodoListsItem />
        <TodoListsItem />
        <TodoListsItem />
      </ul>

      <Modal id="my_modal_3" title="Add a new Todo list" ref={modalRef}>
        <AddTodoListForm />
      </Modal>
    </>
  );
};

export default TodoLists;
