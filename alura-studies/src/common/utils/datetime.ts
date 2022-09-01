import { addZeroInFront } from "./number";

export function parseToSeconds(time: string): number {
    const [ hours = 0, minutes = 0, seconds = 0 ] = time.split(':').map(Number);

    const secondsInHours = hours * 3600;
    const secondsInMinutes = minutes * 60;

    return secondsInHours + secondsInMinutes + seconds;
}

export function parseToHMS(timeInSecs: number) {
    const minutes = Math.floor(timeInSecs / 60);
    const seconds = timeInSecs % 60;

    const minutesString = addZeroInFront(minutes);
    const secondsString = addZeroInFront(seconds);

    return `${minutesString}:${secondsString}`;
}