/*
Linear Search 
*/
function linearSearch(array, searchValue)
{

    // Solution 1
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] == searchValue)
        {
            return `${array[i]} is ${i+1} number position in list`
        }
    }

    // Solution 2
    for(let index in array)
    {
        if(array[index] == searchValue)
        {
            return `${array[index]} is ${parseInt(index) + 1} number position in list`
        }
    }
   return `not found in list`;
}
let array = [21,105,65,33,98,53,23,87,100,77,13,56,86,34,76,65,1];
let searchValue = 56;

console.log(linearSearch(array, searchValue));
