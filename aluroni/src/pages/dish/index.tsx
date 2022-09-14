import styles from './dish.module.scss';
import { useParams } from 'react-router-dom';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Dish as DishType } from 'types/Dishes';
import dishes from 'data/products.json';
import DishTags from 'components/dish-tags';
import NotFound from '../NotFound';
import BasePage from '../../components/base-page';

export default function Dish() {
  const params = useParams();

  if (!params.id) return <NotFound />;

  const parsedId = parseInt(params.id);
  const dish = dishes.find(({ id }: DishType) => id === parsedId);

  if (!dish) return <NotFound />;

  const navigate = useNavigate();

  function getTemplate(dish: DishType) {
    return (<>
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
    </>);
  }

  return (
    /**
     * This routes were used to render the base page
     * content whenever there is a valid dish. Otherwise
     * it will render the 404 page content.
     */
    <Routes>
      <Route path="*" element={<BasePage />}>
        <Route index element={getTemplate(dish)} />
      </Route>
    </Routes>
  );
}
