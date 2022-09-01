import style from './timer.module.scss';
import Button from '../button';
import Clock from './clock';
import { parseToSeconds } from '../../common/utils/datetime';
import { Task } from '../../types/task';
import { useEffect, useState } from 'react';

interface TimerProps {
    label?: string;
    task?: Task;
}

function Timer({ label, task }: TimerProps) {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        if (task) {
            setTime(parseToSeconds(task.time));
        }
    }, [task])

    function countdown(timeRef: number = 0) {
        setTimeout(() => {
            if (timeRef > 0) {
                const newTime = timeRef - 1;
                setTime(newTime);
                countdown(newTime);
                console.log(newTime);
            }
        }, 1000);
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>{label || 'Relógio'}</p>

            <div className={style.clockWrapper}>
                <Clock time={time}></Clock>
            </div>

            <Button 
                onClick={() => countdown(time)}
                label="Começar" />
        </div>
    )
}

export default Timer;