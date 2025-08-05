const phone = {
    model: "iPhone 15 Pro",
    wifiOn: false,
    locked: true,
    password: 1234,
    turnOnWifi() {
        this.wifiOn = true;
    },
    open: function (pass) {
        if (this.password === pass) {
            this.locked = false;
        }
        return !this.locked;
    }
}


const enhancedPhone = {
    model: "iPhone 15 Pro",
    _password: 1234, // Private property
    locked: true,

    // Getter method for password
    get password() {
        return "****";
    },

    // Setter method for password
    set password(newPassword) {
        if (newPassword >= 1000 && newPassword <= 9999) {
            this._password = newPassword;
            console.log('Password updated successfully.');
        } else {
            console.log('Invalid password. Please enter a 4-digit number.');
        }
    },
};
console.log(enhancedPhone._password); // Accessing password via getter


class Phone {
    constructor(model, quantity, price) {
        this.model = model;
        this.quantity = quantity;
        this.price = price;
    }
    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
    }
}
const phone1 = new Phone("iPhone 15 Pro", 10, 999);
const phone2 = new Phone();
console.log(phone1);
phone2.model = "Samsung Galaxy S23";
phone2.quantity = 5;
phone2.price = 799;
console.log(phone2);


// Day 5


class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    // Setter method for password
    set fullname(fullname) {
        const name = fullname.split(" ");
        this.firstname = name[0];
        this.lastname = name[1];
    }

    get fullname() {
        return this.firstname + " " + this.lastname
    }
    // Method to compare age
    compareAge(otherPerson) {
        if (this.age < otherPerson.age) {
            console.log(`${otherPerson.firstname} is older than me .`);
        }
        if (this.age > otherPerson.age) {
            console.log(`${otherPerson.firstname} is younger than me .`);
        }
        if (this.age === otherPerson.age) {
            console.log(`${otherPerson.firstname} is the same age as me .`);
        }
    }

    mostOccurred(numbers) {
        let number2 = [];

        // count number of each number
        for (let i = 0; i < numbers.length; i++) {
            let count = 0;
            let number = numbers[i];
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] === number) {
                    count++;
                }
            }
            number2.push([number, count]);
        }

        // Remove duplicates
        number2 = number2.filter((pair, index, self) =>
            index === self.findIndex((p) => p[0] === pair[0])
        );

        console.log("Most occurred number: ", number2);

        let maxCount = 0;
        for (let i = 0; i < number2.length; i++) {
            if (number2[i][1] > maxCount) {
                maxCount= number2[i][1];
            }
        }
        console.log("Max count: ", maxCount);

    }
}

let person1 = new Person("John", "Doe", 30);
console.log(person1.fullname); // John Doe

let person2 = new Person();
person1.fullname = "Jane Smith";
console.log(person1.fullname); // John Doe

p1 = new Person("Samuel", "Samuel", 24)
p2 = new Person("Samuel", "Joel", 36)
p3 = new Person("Samuel", "Lily", 24)


p1.compareAge(p2) // "Joel is older than me."

p2.compareAge(p1) // "Samuel is younger than me."

p1.compareAge(p3) // "Lily is the same age as me."

p1.mostOccurred([1, 2, 2, 3, 3, 3, 4]); // should output: [[1, 1], [2, 2], [3, 3], [4, 1]]

