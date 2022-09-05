import style from './Menu.module.scss';

// Import normalize.css installed via npm
import 'normalize.css';

// Import SVG as an SVG tag
import { ReactComponent as Logo} from 'assets/img/logo.svg';

export default function Menu() {
  return (
    <main>
      <nav className={style["Menu"]}>
        <Logo />
      </nav>
    </main>
  );
}
