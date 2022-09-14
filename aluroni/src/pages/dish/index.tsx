import styles from './dish.module.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Dish as DishType } from 'types/Dishes';
import dishes from 'data/products.json';
import DishTags from 'components/dish-tags';
import NotFound from '../NotFound';

export default function Dish() {
  const params = useParams();

  if (!params.id) return <NotFound />;

  const parsedId = parseInt(params.id);
  const dish = dishes.find(({ id }: DishType) => id === parsedId);

  if (!dish) return <NotFound />;

  const navigate = useNavigate();

  return (
    <>
      <button className={styles.back}
        onClick={() => navigate(-1)}>
        { '< Voltar' }
      </button>

      <section className={styles.container}>
        <h1 className={styles.title}>
          {dish.title}
        </h1>
        
        <div className={styles.img}>
          <img src={dish.photo} alt={dish.title} />
        </div>

        <div className={styles.content}>
          <p className={styles.content__description}>
            {dish.description}
          </p>
        </div>

        <DishTags dish={dish} />
      </section>
    </>
  );
}
