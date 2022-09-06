import React, { useState } from 'react';
import style from './menu-sorter.module.scss';
import options from './options.json';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export type MenuSorterOption = 'size' | 'serving' | 'price';

interface MenuSorterProps {
    sortOption: MenuSorterOption | '';
    setSortOption: React.Dispatch<React.SetStateAction<MenuSorterOption | ''>>;
}

export default function MenuSorter({ sortOption, setSortOption }: MenuSorterProps) {
  const [ isOpen, setIsOpen ] = useState(false);
    
  function getLabel() {
    if (sortOption.length) {
      const foundOption = options.find(({ value }) => value === sortOption);
      return `${foundOption?.name}`;
    }

    return 'Ordenar por';
  }

  return (
    <button 
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
      className={classNames({
        [style.sorter]: true,
        [style['sorter--active']]: sortOption.length
      })}>
            
      <span>{ getLabel() }</span>

      {  
        isOpen 
          ? <MdKeyboardArrowUp size="24" /> 
          : <MdKeyboardArrowDown size="24" /> 
      }

      <div className={classNames({
        [style.sorter__options]: true,
        [style['sorter__options--active']]: isOpen
      })}>
        {
          options.map(option => 
            <div 
              onClick={() => setSortOption(option.value as MenuSorterOption | '')}
              key={option.value}
              className={classNames({
                [style.sorter__option]: true,
                [style['sorter__option--active']]: option.value === sortOption
              })} >
              { option.name }
            </div>
          )
        }
      </div>
    </button>
  );
}