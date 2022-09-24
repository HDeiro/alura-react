import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento'
import { listaDeEventosState } from '../../state/atom';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

type Props = { 
  evento: IEvento;
}

const Evento: React.FC<Props> = ({ evento }) => {
  
  const setListaEventos = useSetRecoilState(listaDeEventosState);

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  function excluirEvento(id: number | undefined) {
    if (!id) return;
    setListaEventos(eventos => [...eventos.filter(evento => evento.id !== id)]);
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
        onClick={() => excluirEvento(evento.id)}>
      </i>
  </div>)
}

export default Evento
