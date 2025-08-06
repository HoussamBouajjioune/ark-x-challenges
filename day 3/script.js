
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





