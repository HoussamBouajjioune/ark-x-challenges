function BubbleSort(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }

        }
    }
    console.log("Sorted numbers (BubbleSort) :", numbers);
    return numbers;
}

BubbleSort([5, 3, 8, 4, 2]);

function SelectionSort(numbers) {

    console.log("Sorted numbers (SelectionSort befaure) :", numbers);


    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        for (let j = i; j < numbers.length; j++) {
            if (numbers[j] < numbers[index]) {
                index = j;
            }
        }
        if (index !== i) {
            let temp = numbers[i];
            numbers[i] = numbers[index];
            numbers[index] = temp;
        }

    }

    console.log("Sorted numbers (SelectionSort) :", numbers);
    return numbers;

}

SelectionSort([5, 3, 8, 4, 2]);



function InsertionSort(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (numbers[j] < numbers[j - 1]) {
                // Swap logic
                let temp = numbers[j];
                numbers[j] = numbers[j - 1];
                numbers[j - 1] = temp;
            }
        }
    }

    console.log("Sorted numbers (InsertionSort) :", numbers);
    return numbers;
}

InsertionSort([5, 3, 8, 4, 2]);

function LinearSearch(number, numbers) {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === number) {
            console.log("Number found at index:", i);
            return i;
        }
    }
    console.log("Number not found");
    return -1;
}


LinearSearch(8, [4, 5, 3, 8, 4, 2]);


function BinarySearch(number, numbers) {
    found = true;
    console.log("Numbers before sorting:", numbers);
    divide = Math.floor(numbers.length / 2);
    do {
        console.log("Divide index:", divide);
        if (numbers[divide] === number) {
            console.log("Number found at index:", divide);
            found = true;
            return divide;
        } else if (numbers[divide] < number) {
            divide = Math.floor(divide + numbers.length / 2);
        } else {
            divide = Math.floor(divide / 2);
        }

    } while (found === true);

    if (!found) {
        console.log("Number not found");
        return -1;
    }
}

BinarySearch(13, [2, 5, 13, 24, 30, 60]);

