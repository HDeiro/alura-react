import styles from './dish-tags.module.scss';
import classNames from 'classnames';
import { Dish } from '../../types/Dishes';

interface DishTagsProps {
	dish: Dish;
}

export default function DishTags({ dish }: DishTagsProps) {
  return (
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
  );
}
