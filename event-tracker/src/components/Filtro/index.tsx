import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../state/atom';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {
  const setFiltroDeEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);
  const [data, setData] = useState('')
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    const state = data
     ? { data: new Date(data) }
     : {}

    setFiltroDeEventos(state);
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro
