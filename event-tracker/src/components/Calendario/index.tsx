
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import useUpdateEvent from '../../state/hooks/updateEvent';
import useEvents from '../../state/hooks/useEvents';

interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {
  const updateEvent = useUpdateEvent();
  const eventos = useEvents();

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
    
    updateEvent(evt.id, {
      inicio: new Date(updatedEvent.startAt),
      fim: new Date(updatedEvent.endAt),
    });
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
