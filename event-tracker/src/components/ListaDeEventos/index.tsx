import React from 'react';
import useEvents from '../../state/hooks/useEvents';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';

const ListaDeEventos: React.FC = () => {
  const eventos = useEvents();

  return (<section>
    <Filtro />
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento 
          evento={evento} 
          key={evento.id} 
        />
      ))}
    </div>
  </section>)
}

export default ListaDeEventos
