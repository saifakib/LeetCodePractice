/*
Selection Sort 
*/

function selectionSort(array)
{
    const length = array.length;
    if(!Array.isArray(array))
        throw new Error('Not found any list');
    if(length == 0)
        throw new Error('There an empty list');

    for(let i = 0; i < length -1 ; i++)
    {
        let index_min = i;
        let temp = 0;
        for(let j = i+1; j < length; j++)
        {
            if(array[index_min] > array[j])     // if < then opposite will happend 
            {
                index_min = j;
            }
        }
        if(index_min != i)      //OR array[i] != array[index_min]
        {
            temp = array[index_min];
            array[index_min] = array[i];
            array[i] = temp;
        }
    }
    return array;
}

let array = [21,105,65,33,98,53,23,87,100,77,13,56,86,34,76,65,1];
try{
    console.log(selectionSort(array));
}catch(e){
    console.log(e.message);
}