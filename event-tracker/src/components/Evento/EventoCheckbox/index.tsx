import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEventosState } from '../../../state/atom';

type Props = { 
  evento: IEvento; 
};

const EventoCheckbox: React.FC<Props> = ({ evento }) => {
  
  const setListaEventos = useSetRecoilState(listaDeEventosState);

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  function updateStatus(id: number | undefined) {
    if (!id) return;
    
    setListaEventos(eventos => [...eventos.map(evento => {
      if (evento.id === id) {
        return {
          ...evento,
          completo: !evento.completo
        };
      }

      return evento;
    })]);
  }

  return (
    <i 
      className={estilos.join(' ')} 
      onClick={() => updateStatus(evento.id)}>
    </i>
  );
}

export default EventoCheckbox
