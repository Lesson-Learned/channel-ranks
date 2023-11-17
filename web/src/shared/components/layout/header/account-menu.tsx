import { logout, useAuth } from '@auth';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AdminRoutes, Routes } from '../../../routes';
import css from './account-menu.module.css';

export function AccountMenu() {
  const { isAdmin, user } = useAuth();
  const dialog = useRef<HTMLDialogElement>(null);

  function close() {
    dialog.current?.close();
  }

  function open() {
    dialog.current?.showModal();
  }

  return (
    <>
      <button className={ css.button } onClick={ open }>
        G
      </button>

      <dialog ref={ dialog }>
        <button onClick={ close }>Close</button>

        { isAdmin && (
          <Link to={ AdminRoutes.Home }>Admin</Link>
        )}

        { user ? (
          <button onClick={ logout }>Log Out</button>
        ) : (
          <Link to={ Routes.Signup }>Sign Up</Link>
        )}
      </dialog>
    </>
  );
}
