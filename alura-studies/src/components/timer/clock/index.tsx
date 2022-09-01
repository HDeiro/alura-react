import style from './clock.module.scss';

// interface ClockProps {}

function Clock() {
    return (<>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockDivider}>:</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockDivider}>:</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span>
    </>)
}

export default Clock;