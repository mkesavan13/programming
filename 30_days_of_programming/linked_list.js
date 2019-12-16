/*
https://www.hackerrank.com/challenges/30-linked-list/problem
*/

function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){

	this.insert=function(head,data){
        //complete this method
        var newNode = new Node(data);

        if(head == null){
            head = newNode;
            return head;
        }
        
        var start = head;
        
        while(start.next){
            start = start.next;
        }

        start.next = newNode;

        return head;
    };
}
