/*
https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
*/
function insertNodeAtPosition(head, data, position) {
    let i = 0, newnode = new SinglyLinkedListNode(data), inserted = false;

    if(head == null){
        return newnode;
    }

    let toIterate = head;

    while(toIterate.next){
        if((i+1) == position){
            let temp = toIterate.next;
            toIterate.next = newnode;
            newnode.next = temp;
            inserted = true;
            break;
        }
        toIterate = toIterate.next;
        i++;
    }

    if(!inserted){
        toIterate.next = newnode;
    }

    return head;
}
