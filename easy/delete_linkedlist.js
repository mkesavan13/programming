/*
https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
*/

function deleteNode(head, position) {
    let i = 0, toIterate = head;

    if(position == 0){
        head = head.next;
        return head;
    }

    while(toIterate.next){
        if((i + 1) == position){
            toIterate.next = toIterate.next.next;
            break;
        }
        toIterate = toIterate.next;
        i++;
    }

    return head;
}
