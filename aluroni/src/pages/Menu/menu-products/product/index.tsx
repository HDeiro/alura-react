import style from './product.module.scss';
import { Dish } from 'types/Dishes';
import DishTags from 'components/dish-tags';

export default function Product(product: Dish) {
  return (
    <div className={style.product}>
      <img className={style.product__img}
        src={product.photo} 
        alt={`Imagem de um prato "${product.title}"`} />
      <div className={style.product__description}>
        <div className={style.product__title}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <DishTags dish={product} />
      </div>
    </div>
  );
}
