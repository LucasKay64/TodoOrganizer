import * as React from "react";

interface ModalProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  ({ id, title, children }, ref) => {
    return (
      <dialog id={id} className="modal" ref={ref}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal, thats why its here */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg">{title}</h3>
          <div className="py-4">{children}</div>
        </div>
      </dialog>
    );
  }
);

export default Modal;
