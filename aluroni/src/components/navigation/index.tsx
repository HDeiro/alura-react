// Import SVG as an SVG tag
import { ReactComponent as Logo} from 'assets/img/logo.svg';
import { getRoutesDefinitions } from '../../routes';
import { Link } from 'react-router-dom';

import styles from './navigation.module.scss'; 

export default function Navigation() {
  const routes = getRoutesDefinitions();

  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={styles.navigation__list}>
        {
          routes.map(({title, path}, index) => 
            <li 
              key={`nav-link-${index}`} 
              className={styles.navigation__link}>
              <Link 
                to={path}>
                {title}
              </Link>
            </li>
          )
        }
      </ul>
    </nav>
  );
}
  