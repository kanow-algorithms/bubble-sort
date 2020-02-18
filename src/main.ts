import {SortDirection} from "./Enums";
import {swapTwoElementsOfArray} from "./Utils";

function bubbleSort(elementsList: number[], direction: SortDirection = SortDirection.ASC): void {
    const totalListLength: number = elementsList.length;
    const comparator: (comparedElement: number, selectedElement: number) => boolean = direction === SortDirection.ASC ? ascendingCondition : descendingCondition;
    let isSwapped: boolean = false;
    let i: number = 0;
    let finish: number = 0;
    while (finish < totalListLength - 1) {
        isSwapped = false;
        i = 0;
        for (let j = i + 1; j < totalListLength - finish; j++) {
            if (comparator(elementsList[i], elementsList[j])) {
                swapTwoElementsOfArray(elementsList, i, j);
                isSwapped = true;
            }
            i++;
        }
        if (!isSwapped) {
            break;
        }
        finish++;
    }
}

const ascendingCondition: (comparedElement: number, selectedElement: number) => boolean = (comparedElement: number, selectedElement: number) => comparedElement > selectedElement;
const descendingCondition: (comparedElement: number, selectedElement: number) => boolean = (comparedElement: number, selectedElement: number) => comparedElement < selectedElement;
