import dishes from 'data/products.json';
import theme from 'styles/theme.module.scss';
import styles from './main.module.scss';
import ourRestaurantPhoto from 'assets/img/our-restaurant.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/Dishes';

function getRecommendedDishes(): Dish[] {
  return [...dishes].sort(() => 0.5 - Math.random()).splice(0,3);
}

export default function Main() {
  const recommendedDishes = getRecommendedDishes();
  const navigate = useNavigate();

  function redirectToDishDetails(dish: Dish) {
    navigate(`/dish/${dish.id}`, { state: dish, replace: true });
  }

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
              <button 
                onClick={() => redirectToDishDetails(dish)}
                className={styles['recommended-dish__btn']}>
                Ver Mais
              </button>
            </div>
          ))
        }
      </div>
      <h3 className={theme.container__title}>Nossa Casa</h3>
      <div className={styles.ourRestaurant}>
        <img src={ourRestaurantPhoto} alt="Casa do Aluroni" />
        <div className={styles.ourRestaurant__address}>
          <p>Rua Teste</p>
          <p>Bairo Teste - BA</p>
        </div>
      </div>
    </section>
  );
}
