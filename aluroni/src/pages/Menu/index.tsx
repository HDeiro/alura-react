import style from './Menu.module.scss';

// Import normalize.css installed via npm
import 'normalize.css';

// Import SVG as an SVG tag
import { ReactComponent as Logo} from 'assets/img/logo.svg';

import { useState } from 'react';

import MenuSearchBar from './menu-search-bar';
import MenuFilters from './menu-filters';

export default function Menu() {
  const [ searchContent, setSearchContent ] = useState('');
  const [ filters, setFilters ] = useState<number | null>(null);

  return (
    <main>
      <nav className={style.menu}>
        <Logo />
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={style.menu}>
        <h3 className={style.menu__title}>Cardápio</h3>
        <MenuSearchBar 
          searchContent={searchContent} 
          setSearchContent={setSearchContent} />
          <div className={style.menu_filters}>
            <MenuFilters 
              filters={filters}
              setFilters={setFilters}/>
          </div>
      </section>
    </main>
  );
}
