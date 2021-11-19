/**
https://www.hackerrank.com/challenges/30-binary-trees/copy-from/137756303
**/
// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function levelOrder
    this.levelOrder = function(root) {
        var queue = function(){
            this.array = [];
            this.enqueue = function(elem){
                this.array.push(elem);
            }

            this.dequeue = function(){
                return this.array.shift();
            }

            this.isEmpty = function(){
                return this.array.length === 0
            }
        };
        var thisQueue = new queue();
        thisQueue.enqueue(root);
        let resultant = [];
        while(!thisQueue.isEmpty()){
            let current = thisQueue.dequeue();
            resultant.push(current.data);
            if(current.left !== null){
                thisQueue.enqueue(current.left);
            }
            if(current.right !== null){
                thisQueue.enqueue(current.right);
            }
        }
        console.log(...resultant);
        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')

	}; // End of function levelOrder
}; // End of function BinarySearchTree
