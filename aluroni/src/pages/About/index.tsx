import styles from './about.module.scss';
import theme from 'styles/theme.module.scss';
import imgHouse from 'assets/img/about/house.png';
import imgPasta1 from 'assets/img/about/pasta-1.png';
import imgPasta2 from 'assets/img/about/pasta-2.png';

const imgs = [imgPasta1, imgPasta2];

export default function About() {
  return (
    <section>
      <h3 className={theme.container__theme}>Sobre Nós</h3>
      <div className={styles.about}>
        <img src={imgHouse} alt="Casa Aluroni" />
        <div className={styles.about__text}>
          <p>Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!</p>
          <p>Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!</p>
          <p>Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!</p>
        </div>
      </div>
      <div className={styles.about__imgs}>
        {
          imgs.map((imgItem, index) => 
            <img 
              className={styles.about__imgs__img}
              src={imgItem} 
              alt={`Pasta ${index + 1}`} 
              key={`pasta-${index}`} />
          )
        }
      </div>
    </section>
  );
}
  