import { useAuth } from '@auth';
import { logout } from '@libraries';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AdminRoutes, Routes } from '../../../routes';
import css from './account-menu.module.css';

export function AccountMenu() {
  const { profile, user } = useAuth();
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

      <dialog className={ css.dialog } ref={ dialog }>
        <div className={ css.closeRow }>
          <button className={ css.close } onClick={ close }>Close</button>
        </div>

        <h2 className={ css.greeting }>Hello,</h2>

        <div className={ css.actions }>
          { user ? (
            <>
              { profile?.admin && (
                <Link className={ css.action } to={ AdminRoutes.Home }>
                  Admin
                </Link>
              )}
              <button className={ css.action } onClick={ logout }>
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link className={ css.action } to={ Routes.Login }>Log In</Link>
              <Link className={ css.action } to={ Routes.Signup }>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
