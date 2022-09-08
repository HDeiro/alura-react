import style from './Menu.module.scss';

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
  );
}
