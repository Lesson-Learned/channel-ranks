import { useAuth } from '@auth';
import { logout } from '@libraries';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { Modal } from '../modal/modal';
import { useModal } from '../modal/use-modal';
import css from './account-menu.module.css';

export function AccountMenu() {
  const { profile, user } = useAuth();
  const { closeModal, modalRef, openModal } = useModal();

  return (<>
    <button className={ css.button } onClick={ openModal }>
      G
    </button>

    <Modal closeModal={ closeModal } modalRef={ modalRef }>
      <h2 className={ css.greeting }>
        Hello{ profile?.name && `, ${ profile.name }` }
      </h2>

      { profile && (
        <Link className={ css.action } to={ routes.myProfile }>
          Profile
        </Link>
      )}

      { user ? (
        <button className={ css.action } onClick={ logout }>
          Log Out
        </button>
      ) : (
        <>
          <Link className={ css.action } to={ routes.login }>Log In</Link>
          <Link className={ css.action } to={ routes.signup }>
            Sign Up
          </Link>
        </>
      )}
    </Modal>
  </>);
}
