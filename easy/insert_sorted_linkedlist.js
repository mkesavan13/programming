/*
https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem
*/

function sortedInsert(head, data) {
    let temp = head, tail;
    let newnode = new DoublyLinkedListNode(data);
    let inserted = false;
    while(temp !== null){
        if(temp.data > data){
            if(temp.prev == null){
                newnode.next = temp;
                temp.prev = newnode
                head = newnode;
            }
            else{
                temp.prev.next = newnode;
                newnode.next = temp;
                newnode.prev = temp.prev;
            }
            inserted = true;
            break;
        }
        tail = temp;
        temp = temp.next;
    }
    if(!inserted){
        newnode.prev = tail;
        tail.next = newnode;
    }
    return head;
}
