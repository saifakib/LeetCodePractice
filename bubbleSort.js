/*
Bubble Sort
*/

function bubbleSort(array) {

    const length = array.length;
    for(let i = 0; i < length; i++) 
    {
        for(let j = 0; j < length - i - 1; j++)
        {
            if( array[j] > array[j+1])   // if < then opposite will happend 
            {
                let temp = array[ j ];
                array[ j ] = array[ j+1 ];
                array[ j+1 ] = temp;
            }
        }
    }
    return array;
}
let array = [21,105,65,33,98,53,23,87,100,77,13,56,86,34,76,65,1];
console.log(bubbleSort(array));