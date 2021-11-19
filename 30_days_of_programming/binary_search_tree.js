/**
https://www.hackerrank.com/challenges/30-binary-search-trees/copy-from/137754375
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
    
    // Start of function getHeight
    this.getHeight = function(root) {
        if(root == null){
            return -1;
        }
        let leftHeight = this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);
        return Math.max(leftHeight,rightHeight) + 1;
        // Add your code here

    }; // End of function getHeight
