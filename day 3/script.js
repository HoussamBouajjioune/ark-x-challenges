
// Day 3




function factorial(n) {

    // let num = 5;
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(factorial); // should output: 120
    return factorial;
}
factorial(5)


function nDigits(number) {
    let req = number;
    let rese = 0;
    conpteur = 0;
    do {
        rese = req / 10;
        console.log(req);
        req = rese;
        conpteur++;
    } while (rese > 1);

    console.log("Number of digits: ", conpteur); // should output: 6

}
nDigits(123456);

function Timetodraw() {
    let triengle = 6;
    for (let i = 0; i <= triengle; i++) {

        for (let j = 0; j < triengle * 2; j++) {
            if (j <= triengle - i || j >= triengle + i) {
                process.stdout.write(" ");
            } else {
                process.stdout.write("*");
            }
        }

        process.stdout.write("\n");

    }
}
Timetodraw()


function combinator(a, b) {
    let res = factorial(a) / (factorial(b) * factorial(a - b));
    console.log("combinator : " + res) // should output: 10
}

combinator(5, 2) // 10

function Calculator(a, operation, b) {
    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {
                console.log("Cannot divide by zero");
                return;
            }
            break;
        case '%':
            result = a % b;
            break;
        case 'c':
            result = combinator(5, 2);
            break;
        default:
            console.log("Invalid operation");
            return;
    }
    console.log(`Result: ${result}`);
}

// The function call should look like this :
Calculator(5, "+", 1) // 6
Calculator(3, "*", -4) // -12
Calculator(5, 'c', 2) // 10






// Day 4

function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log("Sum: ", total); // should output: 15
    return total;

}
let numbers = [1, 2, 3, 4, 5];
sum(numbers)


function countEven(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    console.log("countEven: ", count);
    return count;
}
let countEvennum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
countEven(countEvennum)

function double(numbers) {
    let doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    console.log("Doubled numbers: ", doubled); // should output: [2, 4, 6]
    return doubled;
}

let doublenum = [1, 2, 3];
double(doublenum)


function sockMerchant(socks) {
    let pairsocks = [];


     // count number of each sock
    for (let i = 0; i < socks.length; i++) {
        let sock = socks[i];
        let countsock = 0;
        for (let j = 0; j < socks.length; j++) {
            if (socks[j] === sock) {
                countsock++;
            }
        }
        pairsocks.push([sock, countsock]);
    }


    // Remove duplicates
    pairsocks = pairsocks.filter((pair, index, self) => 
        index === self.findIndex((p) => p[0] === pair[0])
    );


    // Validate pairs
    for (let i = 0; i < pairsocks.length; i++) {    
        if (pairsocks[i][1] % 2 == 1) {
            pairsocks[i][1] = pairsocks[i][1] - 1;
        }
    }

    let totalPairs = 0;
    for (let i = 0; i < pairsocks.length; i++) {
        totalPairs += pairsocks[i][1]
    }

    totalPairs = totalPairs / 2;    
    console.log("Pairs of socks: ", pairsocks);
    console.log("totalPairs: ", totalPairs);

}

// Here are some test cases :
sockMerchant([1, 2, 1, 2, 1, 3, 2]); // 2

sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3

sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // 4

sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 0