/*
https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem
*/

function printLinkedList(head) {
    while(head){
        console.log(head.data);
        head = head.next;
    }
}
