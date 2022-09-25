import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { filteredEventsAsync } from "./selectors";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: filteredEventsAsync,
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
});
