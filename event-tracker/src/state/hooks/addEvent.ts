import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { getId } from "../../util";
import { listaDeEventosState } from "../atom";

const useAddEvent = () => {
    const setList = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evt: Omit<IEvento, 'id'>) => {
        if (evt.inicio < new Date()) 
            throw new Error(`Can't create events before current date & time`);
            
        const newEvent = {...evt, id: getId()};
        return setList(items => [...items, newEvent]);
    }
};

export default useAddEvent;
