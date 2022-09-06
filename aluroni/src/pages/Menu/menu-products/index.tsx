import Product from './product';
import listOfProducts from './products.json';
import style from './menu-products.module.scss';
import { useEffect, useState } from 'react';
import { MenuSorterOption } from '../menu-sorter';

export type ProductProps = typeof listOfProducts[0];

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
    const [products, setProducts] = useState<ProductProps[]>(listOfProducts);

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

        function applySorting(products: ProductProps[]): ProductProps[] {
            // No sort applied
            if (!sortOption.length) return products;

            let sortProperty: MenuSorterOption;

            switch(sortOption) {
                case 'porcao': sortProperty = 'size'; break;
                case 'qtd_pessoas': sortProperty = 'serving'; break;
                case 'preco': sortProperty = 'price'; break;
            }

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
    )
}