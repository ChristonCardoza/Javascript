// Array with no duplicate and order of insertion is not preserved

class Set {

    constructor(){
        // this will hold the set values
        this.collection = [];
    }

    // this method will check for the presence of an element and return true or false
    has = (element) => {
        return (this.collection.indexOf(element) !== -1);
    }

    // this method will return all the values in the set 
    values = () => {
        return this.collection;
    }

    // this method will add an element to the set
    add = (element) => {
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        return false;
    }

    // this method will remove an element to the set
    remove= (element) => {
        if(this.has(element)){
            index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // this method will return the size of the set 
    size = () => {
        return this.collection.length;
    }

    // this method will return union of two sets as new set
    union = (otherSet) => {
        const unionSet = new Set();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(e => unionSet.add(e));
        secondSet.forEach(e => unionSet.add(e));
        return unionSet;
    }

    // this method will return the intersection of two sets as a new set
    intersection = (otherSet) => {
        const insertionSet = new Set();
        const firstSet = this.values();
        firstSet.forEach((e) => { 
            if (otherSet.has(e)) insertionSet.add(e);
        });
        return insertionSet;
    }

    // this method will return the difference of two sets as a new set
    difference = (otherSet) => {
        const differenceSet = new Set();
        const firstSet = this.values();
        firstSet.forEach((e) => {
            if (!otherSet.has(e)) differenceSet.add(e);
        });
        return differenceSet;
    }

    // this method will test if the set is a subset of a different Set
    subset = (otherSet) => {
        const firstSet = this.values();
        return firstSet.every( (e) => {return otherSet.has(e)});
    }
}

const setA = new Set();
const setB = new Set();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("a");
setB.add("d");
// setB.values();
console.log('setA is subset of setB: ',setA.subset(setB));
console.log('Inter section of setA & setB: ',setA.intersection(setB).values());
console.log('Difference of setB & setA: ',setB.difference(setA).values());
console.log('Union of setB & setA: ',setB.union(setA).values());