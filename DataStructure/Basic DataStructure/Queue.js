
class Queue{

    constructor(){
        this.collection = [];
    }; 

    enqueue = (element) => {
        return this.collection.push(element);
    };

    dequeue = () => {
        return this.collection.shift();
    };

    front = () => {
        return this.collection[0];
    };

    size = () => {
        return this.collection.length;
    };

    isEmpty = () =>{
        return (this.collection.length === 0);
    };

    print = () => {
       this.collection;
    };
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log("The queue elements are: ", q.print());
console.log("The Front of the queue is :",q.front());
q.dequeue();
console.log("The queue element after dequeue are: ",q.print());