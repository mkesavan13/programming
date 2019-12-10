/*
https://www.hackerrank.com/challenges/kangaroo/problem

As per the problem, x & v are positive integers.

x1,x2 being starting point, kangaroo's first jump will be x1 + v1 & x2 + v2

But there on, we will have only v1 multiplying per jump.

So, x1 + y*v1 = x2 + y*v2

Here y is the number of jumps. Solving the equation, y = (x1 - x2) / (v2 - v1)

Thus y is the number of jumps. So if y is a whole number, (i.e) (x1 - x2) % (v2 - v1) is 0, the kangaroos meet.

It is also given that if v2 is greater than or equal to v1, they would not meet as v2 will be way ahead of v1

*/
function kangaroo(x1, v1, x2, v2) {
    if(v2 >= v1){
        return "NO";
    }
    else{
        let bool = (x1 - x2) % (v2 - v1);
        if(!bool){
            return "YES";
        }
        else{
            return "NO";
        }
    }
}
