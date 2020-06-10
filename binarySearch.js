/*
Binary search is here Array must be sorted
*/
function binarySearch(array, searchValue)
{
    if(!Array.isArray(array))
        throw new Error('Not found any list');
    
    let length = array.length;
    if(length === 0)
        throw new Error('There an empty list');

    let left = 0;
    let right = length - 1;

    while(left <= right)
    {
        let mid = Math.floor((left + right) / 2);
        if(array[mid] == searchValue)
        {
            //return mid+1;
            console.log(`${searchValue} is ${mid+1} number position in array`);
        }
        if(array[mid] > searchValue)
        {
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }
    //return -1;
    console.log(`${searchValue} not found in array`);
}
let array = [2,4,6,10,23,45,67,89];
let searchValue = 890;
try{
    binarySearch(array, searchValue);
}catch(e){
    console.log(e.message);
}