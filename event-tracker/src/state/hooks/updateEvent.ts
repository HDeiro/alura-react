import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useUpdateEvent = () => {
    const setEventList = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (id: number, evt: Partial<IEvento>) => {
        setEventList(list => list.map(item => 
            item.id === id 
                ? {...item, ...evt} 
                : item
        ));
    }
};

export default useUpdateEvent;
