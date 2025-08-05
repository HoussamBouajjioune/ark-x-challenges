
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