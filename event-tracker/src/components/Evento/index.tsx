import React from 'react';
import { IEvento } from '../../interfaces/IEvento'
import useDeleteEvent from '../../state/hooks/deleteEvent';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

type Props = { 
  evento: IEvento;
}

const Evento: React.FC<Props> = ({ evento }) => {
  
  const deleteEvent = useDeleteEvent();

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (
    <div className={estilos.join(' ')}>
      <EventoCheckbox 
        evento={evento} />
    
      <div className="cards-info">
        <h3 className={style.descricao}>
          {evento.descricao} - {evento.inicio.toLocaleDateString()}
        </h3>
      </div>

      <i className="far fa-times-circle fa-2x" 
        onClick={() => deleteEvent(evento.id)}>
      </i>
  </div>)
}

export default Evento
