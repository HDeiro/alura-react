import dishes from 'data/products.json';
import theme from 'styles/theme.module.scss';
import styles from './main.module.scss';

function getRecommendedDishes() {
  return [...dishes].sort(() => 0.5 - Math.random()).splice(0,3);
}

export default function Main() {
  const recommendedDishes = getRecommendedDishes();

  return (
    <section>
      <h3 className={theme.container__title}>Recomendações da Cozinha</h3>
      <div className={styles['recommended-dishes']}>
        {
          recommendedDishes.map(dish => (
            <div 
              key={dish.id} 
              className={styles['recommended-dish']}>
              <div 
                key={dish.id} 
                className={styles['recommended-dish__img']}>
                <img src={dish.photo} alt={dish.title} />
              </div>
              <button className={styles['recommended-dish__btn']}>
                Ver Mais
              </button>
            </div>
          ))
        }
      </div>
    </section>
  );
}
