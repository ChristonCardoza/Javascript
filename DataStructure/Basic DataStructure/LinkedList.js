class Node {

    constructor(element){
        this.element=element;
        this.next = null;
    }
    
};

class LinkedList {  

    constructor(){
        this.length = 0;
        this.head = null;
    }


    size = () => {
        return this.length;
    };

    head = () => {
        return this.head;
    };

    add = (element) => {
        const node = new Node(element);

        if(this.head == null){
            this.head = node;
        }else{
            let currentNode = this.head;

            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next =node;
        }
        this.length ++;
    };

    remove = (element)  => {
        let currentNode = this.head;
        let previousNode;

        if (currentNode.element === element) {
            this.head = currentNode.next;
        } else {
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }

        this.length --;
    };

    indexOf = (element) => {
        let currentNode = this.head;
        let index = -1;

        while(currentNode){
            index ++;
            
            if (currentNode.element === element) {
                return index;
            }

            currentNode = currentNode.next;
        }

        return -1;
    };

    elementAt = (index) =>{
        let currentNode = this.head;
        let count = 0;

        while(count < index){
            count ++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    };

    addAt =(index, element) => {
        let node = new Node(element);

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if(index > this.length){
            return false;
        }else if (index === 0){
            node.next = currentNode;
            head = node;
        }else {
            while(currentIndex < index){
                currentIndex ++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length ++;
    };

    removeAt = (index) => {

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if(index < 0 || index >= this.length) {
            return null;
        }else if( index === 0){
            this.head = currentNode.next;
        } else {
            while(currentIndex < index){
                currentIndex ++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length --;
        return currentNode.element;
    };

}

const myList = new LinkedList();

myList.add('Kitten');
myList.add('Puppy');
myList.add('Dog');
myList.add('Cat');
myList.add('Fish');
myList.addAt(3,'Cow');

console.log("The Size of LinkedList: ",myList.size());
console.log("The 3rd Elements of the LinkedList: ",myList.elementAt(3));
console.log("The Removed Element from LinkedList: ", myList.removeAt(3));
console.log("The 3rd Elements of the LinkedList: ",myList.elementAt(3));
console.log("The Index of 'Puppy': ",myList.indexOf('Puppy'));
console.log("The Size of LinkedList: ",myList.size());