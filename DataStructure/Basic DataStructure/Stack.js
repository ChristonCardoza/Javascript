// Ex: Browsers back button
// Functions: Push: Push the data to stack , Pop: Remove the data from the stack, Length: Gives the length of the data in the stack, Peek: Top values in the stack
// Implementation: Arrays and Object

// Create a Stack
class Stack {
    
    constructor() {
        this.count = 0; 
        this.storage = {};
    }
   

    // Add a values onto the end of the stack
    push = (value) => {
        this.storage[this.count] = value;
        this.count ++;
    }

    // Remove and Returns the value at end of the stack
    pop = () => {

        if(this.count === 0) {
            return undefined;
        }

        this.count --;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Length of the Stack
    size = () => {
        return this.count;
    }

    // Returns the value at the end/top of the stack
    peek = () => {
        return this.storage[this.count-1];
    }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log("Stack elment: ", myStack.storage);  
console.log("Element at the Top: ",myStack.peek());            // 2
console.log("Poping element: ",myStack.pop());                // 2
console.log("Element at the Top after poping: ",myStack.peek());            // 1
myStack.push("Christon Cardoza");       
console.log("Element at the Top after adding: ",myStack.size());            // 2
console.log("Poping element: ",myStack.pop());             // Christon Cardoza
console.log("Element at the Top after poping: ",myStack.peek());            // 1
console.log("Final Stack elment: ", myStack.storage);           // { '0' : 1}