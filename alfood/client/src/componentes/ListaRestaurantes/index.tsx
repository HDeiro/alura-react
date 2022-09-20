import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPaginacao } from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const baseUrl = 'http://localhost:8000/api/v1/restaurantes/';

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState(baseUrl);

  useEffect(() => {
    // Fetch restaurants
    axios.get<IPaginacao<IRestaurante>>(proximaPagina)
    .then(({data: { results, next }}) => {
      setRestaurantes(results);
      setProximaPagina(next)
    })
    .catch(console.error);
  }, []);

  const loadMore = () => {
    axios.get<IPaginacao<IRestaurante>>(proximaPagina)
      .then(({data: { results, next }}) => {
        setRestaurantes(oldList => [...(oldList || []), ...results]);
        setProximaPagina(next)
      })
      .catch(console.error);
  }

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    {proximaPagina && <button onClick={() => loadMore()}>Ver Mais</button>}
  </section>)
}

export default ListaRestaurantes
