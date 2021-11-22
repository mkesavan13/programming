class stack{
    constructor(){
        this.stack_array = [];
        this.top_index = -1;
    }

    push(a){
        this.stack_array.push(a);
        this.top_index++;
    }

    pop(){
        this.top_index--;
        return this.stack_array.pop();
    }

    top(){
        return this.stack_array[this.top_index];
    }
}

// Complete the isBalanced function below.
function isBalanced(s) {
    let brackets = new stack();
    s = s.split('');
    for(let char of s){
        if(char == '(' || char == '[' || char == '{'){
            brackets.push(char);
        }
        else if((char == ')' && brackets.top() == '(') || (char == '}' && brackets.top() == '{') || (char == ']' && brackets.top() == '[')){
            brackets.pop(); 
        }
        else{
            return "NO";
        }
    }
    if(brackets.top_index == -1){
        return "YES";
    }
    return  "NO";
}
