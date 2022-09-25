import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const filteredEvents = selector({
    key: 'filteredEvents',
    get: ({ get }) => {
        const { data } = get(filtroDeEventos);
        const list = get(listaDeEventosState);

        return list.filter(evt => {
            if (!data) return true;
        
            const eventDate = evt.inicio.toISOString().slice(0, 10);
            const date = data.toISOString().slice(0, 10);
        
            return eventDate === date;
        });
    }
});

export const filteredEventsAsync = selector({
    key: 'filteredEventsAsync',
    get: async () => {
        const response = await fetch('http://localhost:9734/eventos');
        const events: IEvento[] = await response.json();

        return events.map(event => ({
            ...event,
            inicio: new Date(event.inicio),
            fim: new Date(event.fim)
        }));
    }
})
