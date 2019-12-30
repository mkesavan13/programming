/*
https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem
*/
function insertNodeAtHead(head, data) {
    let newnode = new SinglyLinkedListNode(data);
    if(head == null){
        head = newnode;
        return head;
    }

    newnode.next = head;
    return newnode;
}
