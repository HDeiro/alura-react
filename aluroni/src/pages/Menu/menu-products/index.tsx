import Product from './product';
import listOfProducts from 'data/products.json';
import style from './menu-products.module.scss';
import { useEffect, useState } from 'react';
import { MenuSorterOption } from '../menu-sorter';
import { Dish } from 'types/Dishes';

interface MenuProductsProps {
    searchContent: string;
    filters: number | null;
    sortOption: string;
}

export default function MenuProducts({
  searchContent, 
  filters: categoryFilter, 
  sortOption
}: MenuProductsProps) {
  const [products, setProducts] = useState<Dish[]>(listOfProducts);

  useEffect(() => {
    function filterByTitle(title: string) {
      return searchContent.length
        ? title.toLowerCase().includes(searchContent.toLowerCase())
        : true; // No filters applied, just pass
    }

    function filterByCategory(category: number) {
      return categoryFilter
        ? category === categoryFilter
        : true; // No category filter applied, just pass
    }

    function applySorting(products: Dish[]): Dish[] {
      // No sort applied
      if (!sortOption.length) return products;

      let sortProperty: MenuSorterOption;

      if (sortOption === 'porcao') 
        sortProperty = 'size';
      else if (sortOption === 'qtd_pessoas') 
        sortProperty = 'serving';
      else if (sortOption === 'preco') 
        sortProperty = 'price';

      return products.sort((p1, p2) => p1[sortProperty] > p2[sortProperty] ? 1 : -1);
    }
        
    const refreshedList = listOfProducts.filter(product => {
      return filterByTitle(product.title) 
        && filterByCategory(product.category.id);
    });

    setProducts(applySorting(refreshedList));
  }, [searchContent, categoryFilter, sortOption]);

  return (
    <div className={style['menu-products']}>
      {
        products.map(product => <Product key={ product.id } {...product} />)
      }
    </div>
  );
}
