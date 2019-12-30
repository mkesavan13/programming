/*
https://www.hackerrank.com/challenges/30-queues-stacks/problem
*/
function Solution(){
    //Write your code here
    this.stack = [];
    this.queue = [];
    this.pushCharacter = function(character){
        this.stack.push(character);
    }

    this.enqueueCharacter = function(character){
        this.queue.push(character);
    }

    this.popCharacter = function(){
        return this.stack.pop();
    }

    this.dequeueCharacter = function(){
        return this.queue.shift();
    }
}
