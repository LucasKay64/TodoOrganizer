import { useRef } from "react";

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  return { modalRef, handleOpenModal };
};
