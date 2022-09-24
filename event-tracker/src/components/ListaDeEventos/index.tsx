import React from 'react';
import { useRecoilValue } from 'recoil';
import { listaDeEventosState } from '../../state/atom';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';

type Props = { 
  aoFiltroAplicado: (data: Date | null) => void;
}

const ListaDeEventos: React.FC<Props> = ({ aoFiltroAplicado }) => {
  const eventos = useRecoilValue(listaDeEventosState);

  return (<section>
    <Filtro aoFiltroAplicado={aoFiltroAplicado} />
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
