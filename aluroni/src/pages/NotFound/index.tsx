import theme from 'styles/theme.module.scss';
import styles from './not-found.module.scss';
import { ReactComponent as NotFoundImg } from 'assets/img/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={classNames({
      [theme.container]: true,
      [styles.notFound]: true
    })}>
      <div className={styles.return}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImg />
    </div>
  );
}
  