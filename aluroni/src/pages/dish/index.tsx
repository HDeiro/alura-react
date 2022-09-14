import styles from './dish.module.scss';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import dishes from 'data/products.json';
import { useNavigate } from 'react-router-dom';
import { Dish as DishType } from 'types/Dishes';

export default function Dish() {
  const params = useParams();

  if (!params.id) return '';

  const parsedId = parseInt(params.id);
  const dish = dishes.find(({ id }: DishType) => id === parsedId);

  if (!dish) return '';

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
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__type]: true,
              [styles[`tags__type__${dish.category.id}`]]: true
            })}>
              {dish.category.label}
            </div>

            <div className={styles.tags__portion}>
              {dish.size}g
            </div>

            <div className={styles.tags__serving}>
              Serve {dish.serving} pessoa{dish.serving !== 1 ? 's' : ''}
            </div>

            <div className={styles.tags__price}>
              R$ {dish.price}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
