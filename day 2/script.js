//The Basics  tasks

// Day 2
let firstname = "Houssam";
let lastname = "Bouajjioune";
const PI = 3.14;
let radius = 5;
let favoriteSuperhero = "batman";
let favoriteQuote = "Nations are only as long as their morals last...if their morals are gone, they are gone";

let fullname = firstname + " " + lastname;
let area = PI * radius * radius;
let perimeter = 2 * PI * radius;
let motivation = `A wise man named ${favoriteSuperhero} : "${favoriteQuote}"`;
console.log(motivation);

let a = 3;
let b = 10;

// Swap the values of a and b here
let c = a;
a = b;
b = c;

console.log("After swapping: a = ", a, " and b = ", b); // should output: After swapping: a = 10 and b = 5


// Conditional Statements Tasks

function EvenorOdd(num) {
    (num % 2 === 0) ? console.log("Even") : console.log("Odd");
}

function Daysoftheweek() {

    var day = 4;

    // 1 : Monday
    // 2 : Tuesday
    // 3 : Wednsday
    // 4 : Thursday
    // 5 : Friday
    // 6 : Saturday
    // 7 : Sunday
    // other : Unvalid Day


    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Unvalid Day");
            break;
    }

    // Your program should output : Thursday
}


function Maximum() {

    let a = -15;
    let b = 6;
    let c = 2.6;

    let max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    // your program goes here
    console.log("Maximum is: ", max); // should output : 6

    // should output : 6
}

Maximum();

function TheTeacher() {

    let score = 79;
    if (score > 100 || score < 0) {
        console.log("Invalid score");
    } else {
        if (score >= 85) {
            console.log("A");
        } else if (score >= 70) {
            console.log("B");
        }
        else if (score >= 55) {
            console.log("C");
        } else if (score >= 40) {
            console.log("D");
        } else if (score >= 15) {
            console.log("E");
        } else if (score >= 0) {
            console.log("F");
        }
    }


    // Output : B

}
TheTeacher();

