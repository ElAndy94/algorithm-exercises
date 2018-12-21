bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

selectionSort = (arr) => {

}

mergeSort = (arr) => {

}

merge = (left, right) => {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
