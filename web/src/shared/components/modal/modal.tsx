import css from './modal.module.css';
import { ModalInterface } from './use-modal';

export function Modal({ children, closeModal, modalRef }: Props) {
  return (
    <dialog className={ css.modal } ref={ modalRef }>
      <div className={ css.closeRow }>
        <button className={ css.closeButton } onClick={ closeModal }>
          Close
        </button>
      </div>

      { children }
    </dialog>
  );
}

type Props = Omit<ModalInterface, 'openModal'> & {
  children: JSX.IntrinsicElements['dialog']['children'];
};
