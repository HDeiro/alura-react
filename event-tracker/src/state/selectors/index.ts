import { selector } from "recoil";
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
