import EditIcon from "../../../assets/icons/edit-icon.svg";
import DeleteIcon from "../../../assets/icons/delete-icon.svg";
import Modal from "../../../components/modal/Modal";
import { useRef } from "react";

import format from "date-fns/format";

interface TodoProps {
  id: number;
  title: string;
  description: string;
  dueDateTime: string;
  completed: boolean;
}

const Todo = ({
  id,
  title,
  description,
  dueDateTime,
  completed,
}: TodoProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <div className="flex items-center">
        <input type="checkbox" className="checkbox" checked={completed} />

        <label className="ml-4">
          <span className="text-lg font-medium">{title}</span>
        </label>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-400">
          Due on: {format(new Date(dueDateTime), "MMM dd, yyyy hh:mm a")}
        </span>

        <div>
          <button
            className="btn btn-ghost btn-circle"
            onClick={handleOpenModal}
          >
            <img src={EditIcon} alt="Edit Icon" className="w-5 h-5" />
          </button>

          <button className="btn btn-ghost btn-circle">
            <img src={DeleteIcon} alt="Delete icon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500">{description}</p>

      <div className="divider"></div>

      <Modal id={`editTodo${id}`} title="Edit Todo" ref={modalRef}>
        asd
      </Modal>
    </>
  );
};

export default Todo;
