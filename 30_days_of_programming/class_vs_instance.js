/*
https://www.hackerrank.com/challenges/30-class-vs-instance/problem
*/

function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if(initialAge > 0){
        this.age = initialAge;
    }
    else{
        this.age = 0;
        console.log("Age is not valid, setting age to 0.");
    }
    this.amIOld=function(){
        let age = this.age;
        if(age < 13){
            console.log("You are young.");
        }
        else if(age >= 13 && age < 18){
            console.log("You are a teenager.");
        }
        else if(age >= 18){
            console.log("You are old.");
        }
    };
    this.yearPasses=function(){
        this.age++;
    };
}
