import { RefObject, useEffect, useRef } from 'react';

export function useModal(): ModalInterface {
  const modalRef = useRef<HTMLDialogElement>(null);

  function closeModal() {
    modalRef.current?.close();
  }

  function openModal() {
    modalRef.current?.showModal();
  }

  useEffect(() => {
    function onClickOutsideModal(event: MouseEvent) {
      const rect = modalRef.current!.getBoundingClientRect();

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        closeModal();
      }
    }

    modalRef.current?.addEventListener('mousedown', onClickOutsideModal);

    return () => {
      modalRef.current?.removeEventListener('mousedown', onClickOutsideModal);
    };
  }, []);

  return { closeModal, modalRef, openModal };
}

export type ModalInterface = {
  closeModal(): void;
  modalRef: RefObject<HTMLDialogElement>;
  openModal(): void;
};
