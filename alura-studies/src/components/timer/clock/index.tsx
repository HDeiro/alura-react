import { parseToHMS } from '../../../common/utils/datetime';
import style from './clock.module.scss';

interface ClockProps {
    time: number;
}

function Clock({ time }: ClockProps) {
    const parsedTime = parseToHMS(time).split('');
    
    return (<>{
        parsedTime.map((char, index) => {
            const clazz = char === ':' ? style.clockDivider : style.clockNumber;
            return <span key={index} className={clazz}>{char}</span>
        })
    }</>)
}

export default Clock;