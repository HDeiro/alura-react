import style from './timer.module.scss';
import Button from '../button';
import Clock from './clock';

interface TimerProps {
    label?: string;
}

function Timer({ label }: TimerProps) {
    return (
        <div className={style.timer}>
            <p className={style.title}>{label || 'Relógio'}</p>

            <div className={style.clockWrapper}>
                <Clock></Clock>
            </div>

            <Button label="Começar"></Button>
        </div>
    )
}

export default Timer;