const hash = (data, max) => {

    // data: Data which needs to be hashed
    // max: Number of bucket that holds the data
    let hash = 0;
    for (let i = 0; i < data.length; i++){
        hash += data.charCodeAt(i);
    }
    return hash % max;
};

class HashTable {

    constructor(){
        this.storage = [];
        this.storageLimit = 4;
    }

    add = (key, value) => {

        const index = hash(key, this.storageLimit);
        
        if(this.storage[index]=== undefined){
            this.storage[index]= [ [key, value] ];
        }else{
            let insert = false;
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    this.storage[index][i][1] = value;
                    insert = true;
                }
            }
            if(!insert){
                this.storage[index].push([key, value]);
            }
        }
    };

    remove = (key) => {

        const index = hash(key, this.storageLimit);

        if(this.storage[index].length === 1 && this.storage[index][0][0] === key){
            delete this.storage[index];
        }else{
            for(let i =0; i< this.storage[index]; i++){
                if(this.storage[index][i][0] === key){
                    delete this.storage[index][i];
                }
            }
        }
    };

    lookUp = (key) => {

        const index = hash(key, this.storageLimit);

        if(this.storage[index]=== undefined){
            return undefined;
        }else{
            for (let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    return this.storage[index][i][1];
                }
            }
        }
    }

    print = () => {
        console.log(this.storage);
    };
}

const hashTable = new HashTable();

hashTable.add('Christu','person');
hashTable.add('fido','dog');
hashTable.add('rex','dinosour');
hashTable.add('tux','penguin');
hashTable.add('tux','penguin2');

console.log(hashTable.lookUp('tux'));

hashTable.print();