/*
https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem
*/

function insertNodeAtTail(head, data) {
    let node = new SinglyLinkedListNode(data);
    let temp = head;
    if(temp == null){
        temp = node;
        return temp;
    }
    while(temp.next){
        temp = temp.next;
    }
    temp.next = node;
    return head;
}
