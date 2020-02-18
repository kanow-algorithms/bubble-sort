export function swapTwoElementsOfArray<T>(array: T[], elementAIndex: number, elementBIndex: number): void {
    [array[elementAIndex], array[elementBIndex]] = [array[elementBIndex], array[elementAIndex]];
}
