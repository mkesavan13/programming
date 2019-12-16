/*
https://www.hackerrank.com/challenges/30-inheritance/problem
*/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}


class Student extends Person {

    constructor(firstName, lastName, id, scores){
        super(firstName,lastName,id);
        this.scores = scores;
    }

    calculate(){
        let total = 0, scores = this.scores;
        for(let score of scores){
            total += score;
        }
        let average = total/scores.length;
        if(average >= 90 && average <= 100){
            return 'O';
        }
        else if(average >= 80 && average < 90){
            return 'E';
        }
        else if(average >= 70 && average < 80){
            return 'A';
        }
        else if(average >= 55 && average < 70){
            return 'P';
        }
        else if(average >= 40 && average < 55){
            return 'D';
        }
        else{
            return 'T';
        }
    }
    
}
