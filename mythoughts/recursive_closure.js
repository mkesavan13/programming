//Write a script with "one function" which when called as, 
//add(1,2,3...,n) should give the sum
//or when I call as,
//add(1)(2)(3)...(n)(); should also give the sum

function add(x){
    if(arguments.length > 1){
        let sum = 0;
        for(let item of arguments){
            sum+=item;
        }
        return sum;
    }
    else{
        let addInner = (y) => {
            if(y){
                x = x+y;
                return addInner;
            }
            else{
                return x;
            }
        }
        return addInner;
    }
}
