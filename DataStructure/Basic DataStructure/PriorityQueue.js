class PriorityQueue {
    
    constructor(){
        this.collection =[];
    }

    enqueue = (element) => {

        if (this.isEmpty()){
            this.collection.push(element)
        }else{
            let added = false;
            for(let i=0; i<this.collection.length; i++){

                //Checking the priorities
                if(element[1] < this.collection[i][1]){
                    this.collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.collection.push(element);
            }
        }
    }

    dequeue = () =>{
        const value = this.collection.shift();
        return value;
    }

    front = () => {
        return this.collection[0];
    }

    size = () => {
        return this.collection.length;
    }

    isEmpty = () => {
        return (this.collection.length === 0);
    }

    print = () => {
        return this.collection;
    }
}

const pq = new PriorityQueue();
pq.enqueue(['Beta', 2]);
pq.enqueue(['Gama', 3]);
pq.enqueue(['Alpha',1]);
console.log("The queue elements are: ", pq.print());
console.log("The Front of the queue is :",pq.front());
pq.dequeue();
console.log("The queue element after dequeue are: ",pq.print());
