class Node {
    constructor(data,left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

}

class BinarySearchTree {

    constructor(){
        this.root = null;
    }

    // Add the node to  BST
    add = (data) => {
        
        const node = this.root;

        if( node === null){
            this.root = new Node(data);
            return ;

        }else{

            // If the root node is not null then find a location where new node to be added
            const searchTree = (currentNode) =>{

                // Left Child Logic
                if(data < currentNode.data){

                    if(currentNode.left === null){
                        currentNode.left = new Node(data);
                        return ;
                    }else {
                        return searchTree(currentNode.left);
                    }

                }
                // Right Child Logic
                else if (data > currentNode.data){

                    if(currentNode.right === null){
                        currentNode.right = new Node(data);
                        return ;
                    }else {
                        return searchTree(currentNode.right);
                    }
                }
                // Ignore
                else {
                    return null;
                }
            };

            return searchTree(node);
        }
    };


    remove = (data) => {
          

        if(this.root === null){
            return null;
        }else {
            const removeNode = (currentNode, data) => {
                
                // if(currentNode === null){
                //     return null;
                // }

                if (data === currentNode.data) {
                    
                    // Current Node has NO Children
                    if(currentNode.left === null && currentNode.right === null){
                        return null;
                    }
                    // Current Node has No left child
                    else if(currentNode.left === null){
                        return currentNode.right;
                    }
                    // Current Node has No right child
                    else if(currentNode.right === null){
                        return currentNode.left;
                    } 
                    // Current Node has Both child
                    else {
                        // Take the First right child and traverse to leftmost node, copy the value of leftmost node to current node
                        let tempNode = currentNode.right;

                        while (tempNode.left !== null){
                            tempNode = tempNode.left;
                        }
                        currentNode.data = tempNode.data;
                        currentNode.right = removeNode(currentNode.right,tempNode.data);
                        return currentNode;
                    }


                }else if (data < currentNode.data){

                    currentNode.left = removeNode(currentNode.left, data);
                    return currentNode;
                }else {

                    currentNode.right = removeNode(currentNode.right,data);
                    return currentNode;
                }
            };

            this.root = removeNode(this.root, data);
        }
    };


    findMin = () =>{

        // In BST Smallest Element is stored at LeftMost position of the tree.
        let current = this.root;
        while (current.left !== null){
            current = current.left;
        }
        return current.data;
    };

    findMax = () => {

        // In BST Largest element is stored at RightMost position of the tree.
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    };

    find = (data) => {

        let current = this.root;
        while(current){
            if(data === current.data){
                return current;
            }else if (data < current.data){
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return null;
    }

    isPresent = (data) => {

        let current = this.root;
        while(current){
            if (data === current.data) {
                return true;
            } else if(data < current.data){
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return false;

    };

    findMinHeight = (node = this.root) => {

        // Distance between root node to the node which has no 2 children
        if (node === null){
            return -1;
        }else{
            let left = this.findMinHeight(node.left);
            let right = this.findMinHeight(node.right);
            if(left < right ){
                return left + 1;
            } else {
                return right + 1;
            }
        };
    };

    findMaxHeight = (node = this.root) => {

        // Distance between root node to least leaf node
        if (node === null) {
            return -1;
        } else {
            let left = this.findMaxHeight(node.left);
            let right = this.findMaxHeight(node.right);
            if(left > right){
                return left + 1;
            }else {
                return right + 1;
            }
        };
    };

    isBalanced = () => {

        // MinHeight of the tree should be greater or equal to MaxHeight - 1
        return (this.findMinHeight() >= this.findMaxHeight() -1);
    };

    inOrder = () => {

        // Left -> Parent -> Right
        if(this.root === null){
            return null;
        }else{
            const result = new Array();
            const traverseInorder = (node) => {
                node.left && traverseInorder(node.left);
                result.push(node.data);
                node.right && traverseInorder(node.right);
            }
            traverseInorder(this.root);
            return result;
        }
    };

    preOrder = () => {

        // Parent -> Left -> Right
        if(this.root === null){
            return null;
        }else{
            const result = new Array();
            const traversePreorder = (node) => {
                result.push(node.data);
                node.left && traversePreorder(node.left);
                node.right && traversePreorder(node.right);
            }
            traversePreorder(this.root);
            return result;
        }
    };

    postOrder = () => {

        // Left -> Right -> Parent 
        if(this.root === null){
            return null;
        }else{
            const result = new Array();
            const traversePostorder = (node) => {
                node.left && traversePostorder(node.left);
                node.right && traversePostorder(node.right);
                result.push(node.data);
            }
            traversePostorder(this.root);
            return result;
        }
    };

    levelOrder = () => {
        
        // Root -> Children -> Grand Children
        if(this.root === null){
            return null;
        }else {
            const result = [];
            const queue = [];
            queue.push(this.root);
            
            while(queue.length >0){

                let node = queue.shift();
                result.push(node.data);

                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
               
            }
            return result;
        }
    }




}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.add(50);
binarySearchTree.add(17);
binarySearchTree.add(72);
binarySearchTree.add(12);
binarySearchTree.add(23);
binarySearchTree.add(54);
binarySearchTree.add(76);
binarySearchTree.add(9);
binarySearchTree.add(14);
binarySearchTree.add(19);
binarySearchTree.add(67);

binarySearchTree.remove(50);

console.log("Minimum Node in BST: ",binarySearchTree.findMin());
console.log("Maximum Node in BST: ",binarySearchTree.findMax());

binarySearchTree.remove(76);

console.log("\n\nAfter Deleting Maximum Node , Current Maximum node in BST: ",binarySearchTree.findMax());
console.log("Is node 50 present: " ,binarySearchTree.isPresent(50));
console.log("The Subtree of node 17: ",binarySearchTree.find(17));

console.log("\n\nThe Minimum Height of BST: ",binarySearchTree.findMinHeight());
console.log("The Maximum Height of BST: ",binarySearchTree.findMaxHeight());
console.log("Is BST Balanced: ",binarySearchTree.isBalanced());

binarySearchTree.add(50);
binarySearchTree.add(76);


console.log("\n\nThe Minimum Height of BST: ",binarySearchTree.findMinHeight());
console.log("The Maximum Height of BST: ",binarySearchTree.findMaxHeight());
console.log("Is BST Balanced: ",binarySearchTree.isBalanced());

console.log("\n\nIn-Order Traversal: ", binarySearchTree.inOrder());
console.log("\n\nPre-Order Traversal: ", binarySearchTree.preOrder());
console.log("\n\nPost-Order Traversal: ", binarySearchTree.postOrder());