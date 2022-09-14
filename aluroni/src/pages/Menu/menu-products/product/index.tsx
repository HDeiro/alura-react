import style from './product.module.scss';
import { Dish } from 'types/Dishes';
import DishTags from 'components/dish-tags';
import { useNavigate } from 'react-router-dom';

export default function Product(product: Dish) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/dish/${product.id}`)}
      className={style.product}>
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
