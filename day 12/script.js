const readline = require('readline');

class User {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

let Contacts = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    let task = -1;

    while (task !== 0) {
        console.log("\n1. Add Contact");
        console.log("2. View Contacts");
        console.log("3. Search Contact");
        console.log("0. Exit");

        const input = await askQuestion("Choose a number: ");
        task = parseInt(input);

        switch (task) {
            case 1:
                const name = await askQuestion("Enter Name: ");
                const phone = await askQuestion("Enter Phone: ");
                Contacts.push(new User(name, phone));
                console.log(`Contact "${name}" added successfully!`);
                break;

            case 2:
                console.log("\nContacts List:");
                if (Contacts.length === 0) {
                    console.log("No contacts available.");
                } else {
                    Contacts.forEach((contact, index) => {
                        console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}`);
                    });
                }
                break;

            case 3:
                const searchName = await askQuestion("Enter Name to Search: ");
                const results = Contacts.filter(c =>
                    c.name.toLowerCase().includes(searchName.toLowerCase())
                );
                if (results.length === 0) {
                    console.log("No contacts found.");
                } else {
                    console.log("Search Results:");
                    results.forEach(c => {
                        console.log(`Name: ${c.name}, Phone: ${c.phone}`);
                    });
                }
                break;

            case 0:
                console.log("Exiting...");
                rl.close();
                break;

            default:
                console.log("Invalid option. Please try again.");
                break;
        }
    }
}

main();
