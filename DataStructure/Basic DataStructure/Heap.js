/*

        Imagine a tree:
                0
              /   \
             1     2
            / \   / \
            3  4  5  6

If our i = 1, 
    the left child's index will be 1 * 2 + 1. 
    And the right children's index will be 1 * 2 + 2

*/ 

class Heap {

    constructor() {
        this.data = [];
    }

    getParentIndex = (i) => {
        return Math.floor((i-1)/2);
    };

    getLeftChildIndex = (i) => {
        return i * 2 + 1;
    };

    getRightChildIndex = (i) => {
        return i * 2 + 2;
    };

    swap = (i1, i2) => {

        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
    };

    push = (key) => {
        this.data[this.data.length] = key;
        this.heapifyUp();
    };

    heapifyUp = () => {

        let currentIndex = this.data.length - 1;

        while(this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    };

    poll = () => {

        const maxValue = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.length --;
        this.heapifyDown();

        return maxValue;
    };

    heapifyDown = () => {

        let currentIndex = 0;

        while( this.data[this.getLeftChildIndex(currentIndex)] !== undefined){

            // Heap doesn't have right child without left child
            let biggestChildIndex = this.getLeftChildIndex(currentIndex);

            if(this.data[this.getRightChildIndex(currentIndex)] !== undefined
                    && this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]){

                        biggestChildIndex =this.getRightChildIndex(currentIndex);

            }

            if(this.data[currentIndex] < this.data[biggestChildIndex]){
                this.swap(currentIndex, biggestChildIndex);
                currentIndex = biggestChildIndex;
            }else {
                return ;
            }
        }
    };


}

const heap = new Heap();

heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log("Entered Heap Data: ",heap.data.join(','));

let a = [];

a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log('Top 5 items:', a);

console.log("Heap Data after Poping: ",heap.data.join(','));