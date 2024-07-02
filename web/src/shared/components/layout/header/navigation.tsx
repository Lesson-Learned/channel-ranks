import { useAuth } from '@auth';
import { logout } from '@libraries';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { adminRoutes, routes } from '../../../routes';
import { AccountMenu } from './account-menu';
import css from './navigation.module.css';

export function Navigation() {
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
      <nav className={ css.links }>
        <Link className={ css.link } to="/">Home</Link>
        <Link className={ css.link } to={ routes.shows }>Shows</Link>
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
        <Link className={ css.dialogLink } to={ routes.shows }>Shows</Link>

        { user ? (
          <>
            { profile?.admin && (
              <Link className={ css.dialogLink } to={ adminRoutes.home }>
                Admin
              </Link>
            )}
            <button className={ css.dialogLink } onClick={ logout }>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link className={ css.dialogLink } to={ routes.login }>
              Log In
            </Link>
            <Link className={ css.dialogLink } to={ routes.signup }>
              Sign Up
            </Link>
          </>
        )}
      </dialog>
    </>
  );
}
