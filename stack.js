/*
Stack Structure LIFO

*/

function Stack(array, max) {
    this.array = array;
    let top = array.length;

    this.display = function(array) {
        console.log(this.array);
    }

    this.push = function(value) {
        if(top == max)
            throw new Error('Stack Overflow');
        array[top] = value;         //Or array.push(value)
        top++;
        console.log(`${value} added in Stack`);
    }
    this.pop = function() {
        if(top == 0)
            throw new Error('Stack Underflow');
        
        top--;
        let q = array[top];
        array.pop();
        
        console.log(`${q} is removed from Stack`);
    }
}

let list = [];
const listMazSize = 3;
let stc = new Stack(list, listMazSize);
