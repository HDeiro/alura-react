export function addZeroInFront(value: number): string {
    return String(value).padStart(2, '0');
}