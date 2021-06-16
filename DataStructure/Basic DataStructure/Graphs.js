/*
Graph Operation:                    Traverse:
    
    - addNode                           - BFS
    - removeNode                        - DFS
    - add Edge
    - removeEdge
    - contains
    - isEmpty
    - size
    - merge 
    
*/

class Graph {

    #nodes;

    constructor(){
        this.#nodes = {};
    }

    addNode(node) {
        this.#nodes[node]= [];
    }

    addEdge(source, destination){

        if(!this.#nodes[source] || !this.#nodes[destination]){
            return false;
        }else{

            !this.#nodes[source].includes(destination) && this.#nodes[source].push(destination);

            !this.#nodes[destination].includes(source) && this.#nodes[destination].push(source);
        }
    }

    showNodes(){
        console.log(this.#nodes);
    }

    bfs (source, destination){
        const q = [source];
        const visited = {};

        while(q.length){

            let current = q.shift();

            if( visited[current] ){ continue;}

            if(current === destination)  {return true;}

            visited[current] = true;

            let neighbors = this.#nodes[current];

            for (let i = 0; i < neighbors.length; i++){
                q.push(neighbors[i]);
            }

            
        }
        return false;
    }

    dfs (source, destination,visited = {}){

        if(visited[source]){return false;}

        if(source === destination){ return true;}

        visited[source] = true;

        const neighbors = this.#nodes[source];

        for (let i = 0; i < neighbors.length; i++) {
           
            if(this.dfs(neighbors[i],destination,visited)) { return true; }
            
        }

        return false;
    }
}

/*
                                ____  
       Vova - Tim       Jeff  seth |
              /  \      /      |___|
    John - Ann - Lee - Ron

*/

const g = new Graph();

g.addNode('Vova');
g.addNode('Tim');
g.addNode('John');
g.addNode('Ann');
g.addNode('Lee');
g.addNode('Ron');
g.addNode('Jeff');
g.addNode('Seth');

g.addEdge('Tim','Vova');
g.addEdge('Tim','Ann');
g.addEdge('Tim','Lee');
g.addEdge('Ann','John');
g.addEdge('Ann','Lee');
g.addEdge('Ron','Lee');
g.addEdge('Ron','Jeff');
g.addEdge('Seth','Seth');

g.showNodes();

console.log("\n\nBFS\n\n");

console.log("Can we traverse 'Tim' to 'Jeff': ",g.bfs('Tim','Jeff'));

console.log("Can we traverse 'Tim' to 'Seth': ",g.bfs('Tim','Seth'));

console.log("\n\nDFS\n\n");

console.log("Can we traverse 'Tim' to 'Jeff': ",g.dfs('Tim','Jeff'));

console.log("Can we traverse 'Tim' to 'Seth': ",g.dfs('Tim','Seth'));