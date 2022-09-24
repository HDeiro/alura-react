import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEventosState } from '../../../state/atom';
import useUpdateEvent from '../../../state/hooks/updateEvent';

type Props = { 
  evento: IEvento; 
};

const EventoCheckbox: React.FC<Props> = ({ evento }) => {
  
  const updateEvent = useUpdateEvent();

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  function updateStatus() {
    const { id, completo } = evento;
    updateEvent(id, { completo: !completo });
  }

  return (
    <i 
      className={estilos.join(' ')} 
      onClick={updateStatus}>
    </i>
  );
}

export default EventoCheckbox
