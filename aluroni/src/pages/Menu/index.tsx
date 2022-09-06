import style from './Menu.module.scss';

// Import normalize.css installed via npm
import 'normalize.css';

// Import SVG as an SVG tag
import { ReactComponent as Logo} from 'assets/img/logo.svg';

import { useState } from 'react';

import MenuSearchBar from './menu-search-bar';
import MenuSorter, { MenuSorterOption } from './menu-sorter';
import MenuFilters from './menu-filters';
import MenuProducts from './menu-products';

export default function Menu() {
  const [ searchContent, setSearchContent ] = useState('');
  const [ filters, setFilters ] = useState<number | null>(null);
  const [ sortOption, setSortOption ] = useState<MenuSorterOption | ''>('');

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
        <div className={style.menu__filters}>
          <MenuFilters 
            filters={filters}
            setFilters={setFilters} />
          <MenuSorter 
            sortOption={sortOption}
            setSortOption={setSortOption} />
        </div>
        <MenuProducts 
          searchContent={searchContent}
          filters={filters}
          sortOption={sortOption}/>
      </section>
    </main>
  );
}
