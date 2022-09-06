import React from 'react';

import style from './menu-filters.module.scss';
import filterOptions from './filters.json';
import classNames from 'classnames';

type FilterOption = typeof filterOptions[0];

interface FilterProps {
    filters: number | null;
    setFilters: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function MenuFilters({ filters, setFilters }: FilterProps) {
  function selectFilter(option: FilterOption) {
    const newValue = filters === option.id ? null : option.id;
    return setFilters(newValue);
  }

  return (
    <div className={style.filters}>
      {
        filterOptions.map(filter => (
          <button 
            className={classNames({
              [style.filters__filter]: true,
              [style['filters__filter--active']]: filter.id === filters
            })}
            onClick={() => selectFilter(filter)}
            key={filter.id}>
            {filter.label}
          </button>
        ))
      }
    </div>
  );
}