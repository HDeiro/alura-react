import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";

const useEvents = () => {
    return useRecoilValue(listaDeEventosState);
};

export default useEvents;
