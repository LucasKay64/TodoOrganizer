import plusIcon from "../../../assets/icons/plus-icon.svg";
import TodoListsItem from "./TodoListsItem";
import Modal from "../../../components/modal/Modal";
import AddTodoListForm from "./AddTodoListForm";
import toast from "react-hot-toast";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";

import { useGetTodoLists } from "../api/getTodoLists";

import { useRef } from "react";

const TodoLists = () => {
  const { todoLists, isPending, error, isEmpty } = useGetTodoLists();

  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  if (isPending)
    return (
      <div className="w-80 h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (error) {
    toast.error("Something went wrong. Try restarting the app.");
    return (
      <div className="w-80 h-screen flex justify-center items-center">
        <ErrorMessage
          message={"Something went wrong. Try restarting the app."}
        />
      </div>
    );
  }

  return (
    <>
      <ul className="menu w-60 md:w-80 text-base-content">
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

        {isEmpty ? (
          <p className="text-center">
            No lists found. Add a new list to get started.
          </p>
        ) : (
          todoLists?.map(({ id, title }) => (
            <TodoListsItem key={id} id={id} title={title} />
          ))
        )}
      </ul>

      <Modal id="addTotoList" title="Add a new Todo list" ref={modalRef}>
        <AddTodoListForm />
      </Modal>
    </>
  );
};

export default TodoLists;
