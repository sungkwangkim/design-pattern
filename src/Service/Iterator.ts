export interface Iterator {
    hasNext(): boolean;
    // eslint-disable-next-line @typescript-eslint/ban-types
    next(): object;
}
