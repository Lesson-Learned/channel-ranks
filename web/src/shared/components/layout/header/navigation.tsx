import { logout, useAuth } from '@auth';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AdminRoutes, Routes } from '../../../routes';
import { AccountMenu } from './account-menu';
import css from './navigation.module.css';

export function Navigation() {
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
      <nav className={ css.links }>
        <Link className={ css.link } to="/">Home</Link>
        <Link className={ css.link } to={ Routes.Shows }>Shows</Link>
        <AccountMenu />
      </nav>

      <button className={ css.menuButton } onClick={ open }>
        Menu
      </button>

      <dialog className={ css.dialog } ref={ dialog }>
        <div className={ css.closeRow }>
          <button className={ css.closeButton } onClick={ close }>
            Close
          </button>
        </div>

        <Link className={ css.dialogLink } to="/">Home</Link>
        <Link className={ css.dialogLink } to={ Routes.Shows }>Shows</Link>

        { user ? (
          <>
            { isAdmin && (
              <Link className={ css.dialogLink } to={ AdminRoutes.Home }>
                Admin
              </Link>
            )}
            <button className={ css.dialogLink } onClick={ logout }>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link className={ css.dialogLink } to={ Routes.Login }>
              Log In
            </Link>
            <Link className={ css.dialogLink } to={ Routes.Signup }>
              Sign Up
            </Link>
          </>
        )}
      </dialog>
    </>
  );
}
