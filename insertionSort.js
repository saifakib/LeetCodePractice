/**
 * Insertion Sort
**/

function insertionSort(array) {
    let length = array.length;

    for(let i = 1; i < length; i++) {
        let item = array[i];

        let j = i - 1;
        while( j >= 0 && array[j] < item) {
            array[ j+1 ] = array[ j ];
            j = j-1;
        }
        array[ j+1 ] = item;
    }
    return array;
}

let array = [21,105,65,33,98,53,23,87,100,77,13,56,86,34,76,65,1];
console.log(insertionSort(array));