import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";

const useDeleteEvent = () => {
    const list = useSetRecoilState(listaDeEventosState);

    return (id: number) => list(evts => [...evts.filter(evt => evt.id !== id)]);
};

export default useDeleteEvent;
