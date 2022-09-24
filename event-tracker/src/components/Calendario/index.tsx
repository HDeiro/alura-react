
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../state/atom';

interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {
  const setListaEventos = useSetRecoilState(listaDeEventosState);
  const eventos = useRecoilValue(listaDeEventosState);

  const eventosKalend = new Map<string, IKalendEvento[]>();

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue'
    })
  })

  const onEventDragFinish: OnEventDragFinish = (_, updatedEvent: CalendarEvent) => {
    const evt = eventos.find(evento => evento.id === updatedEvent.id);

    if (!evt) return;
    
    const newEvt = {
      ...evt,
      inicio: new Date(updatedEvent.startAt),
      fim: new Date(updatedEvent.endAt),
    };

    setListaEventos(evts => [...evts.map(evtItem => 
      evtItem.id === newEvt.id ? newEvt : evtItem
    )]);
  }

  return (
    <div className={style.Container}>
      <Kalend
        onEventDragFinish={onEventDragFinish}
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
      />
    </div>
  );
}

export default Calendario
