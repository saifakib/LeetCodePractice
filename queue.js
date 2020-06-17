/*
Queue Structure FIFO
*/

function Queue(array, max) {
    this.array = array;

    let rear = array.length;
    let front = 0;

    this.display = function(array) {
        console.log(this.array);
    }

    this.enQueue = function(value) {
        if(rear == max)
            throw new Error('Queue Overflow');
        array[rear] = value;         //Or array.push(value)
        rear++;
        console.log(`${value} added in Queue`);
    }

    this.dQueue = function() {
        if(rear == front)
            throw new Error('Queue Underflow');
        let q = array[0];
        front++;
        array.shift();
        console.log(`${q} is removed from Queue`);
    }

}

let list = [1,2,3];
const listMazSize = 3;
let que = new Queue(list, listMazSize);

