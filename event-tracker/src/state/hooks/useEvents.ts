import { useRecoilValue } from "recoil";
import { filteredEvents } from "../selectors";

const useEvents = () => {
    return useRecoilValue(filteredEvents);
};

export default useEvents;
