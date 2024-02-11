import TodoListAppbar from "./TodoListAppbar";
import Modal from "../../../components/modal/Modal";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";

import PlusIconWhite from "../../../assets/icons/plus-icon-white.svg";

import { useModal } from "../../../hooks/useModal";

const TodoListDetails = () => {
  const { modalRef, handleOpenModal } = useModal();

  return (
    <>
      <TodoListAppbar />
      <div className="divider mt-0"></div>

      <Todos />

      {/* FAB */}
      <button
        className="btn btn-primary btn-circle btn-lg fixed bottom-5 right-5"
        onClick={handleOpenModal}
      >
        <img src={PlusIconWhite} alt="Plus Icon" className="h-12 w-12" />
      </button>

      <Modal id="addTodo" title="Add a new Todo" ref={modalRef}>
        <AddTodoForm />
      </Modal>
    </>
  );
};

export default TodoListDetails;
