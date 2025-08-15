const readline = require('readline');
const fs = require('fs').promises;


class User {
    constructor(accountID, name, pin, balance) {
        this.accountID = accountID
        this.name = name
        this.pin = pin
        this.balance = balance
        this.transactions = [];
    }
}

async function Generate_ID_and_PIN() {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let accountID = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        accountID += characters[randomIndex];
    }

    const pin = Math.floor(Math.random() * 9000 + 1000).toString(); // Generates a 4-digit PIN

    const filePath = 'users.json'; // Path to your JSON file
    const fileData = await fs.readFile(filePath, 'utf-8');
    // 2. Parse it into an array
    const data = JSON.parse(fileData);

    if (data.some(user => user.accountID === accountID))
        Generate_ID_and_PIN()
    else
        return { accountID, pin };
}

async function addElement(newuser) {
    try {
        const filePath = 'users.json'; // Path to your JSON file
        // 1. Read the file
        const fileData = await fs.readFile(filePath, 'utf-8');

        // 2. Parse it into an array
        const data = JSON.parse(fileData);
        // 3. Push the new element
        data.push(newuser);
        // 4. Write it back to the file
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        return newuser;

    } catch (err) {
        console.error('Error:', err);
    }
}

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


async function Login(accountID, pin) {

    const filePath = 'users.json'; // Path to your JSON file
    const fileData = await fs.readFile(filePath, 'utf-8');
    // 2. Parse it into an array
    const data = JSON.parse(fileData);

    if (data.some(user => user.accountID === accountID && user.pin === pin)) {
        return true; // Login successful
    } else {
        return false; // Login failed
    }
}

async function main() {
    let task = -1;

    while (task !== 0) {
        console.log("\n1. Add user");
        console.log("2. Login");
        console.log("0. Exit");

        const input = await askQuestion("Choose a number: ");
        task = parseInt(input);

        switch (task) {
            case 1:
                // const accountID = await askQuestion("Enter accountID: ");
                const name = await askQuestion("Enter Name: ");
                // const pin = await askQuestion("Enter pin: ");
                const balance = await askQuestion("Enter balance: ");
                const { accountID, pin } = await Generate_ID_and_PIN();
                // addElement(new User(accountID, name, pin, balance))
                //     .then((newelem) => console.log("User added successfully!\nThe new user is :",newelem)).
                //     catch(err => console.error("Error adding user:", err));
                try {
                    const newelem = await addElement(new User(accountID, name, pin, balance));
                    console.log("User added successfully!\nThe new user is:", newelem);
                } catch (err) {
                    console.error("Error adding user:", err);
                }
                break;

            case 2:
                const accountID2 = await askQuestion("Enter accountID: ");
                const pin2 = await askQuestion("Enter pin: ");

                if (await Login(accountID2, pin2)) {
                    await submain(accountID2, pin2);
                } else {
                    console.log("Login failed. Please check your accountID and pin.");
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
const EventEmitter = require('events');


// async function submain(accountID, pin) {
//     console.log("\nWelcome to the ATM Management System!");
//     let task = -1;
//     const filePath = 'users.json';

//     while (task !== 0) {
//         console.log("\n1. Depositing Money");
//         console.log("2. Withdrawing Money");
//         console.log("3. Checking Balance");
//         console.log("4. Viewing Transaction History");
//         console.log("0. Exit");

//         const input = await askQuestion("Choose a number: ");
//         task = parseInt(input);

//         let data = JSON.parse(await fs.readFile(filePath, 'utf-8'));
//         let userIndex = data.findIndex(u => u.accountID === accountID && u.pin === pin);

//         if (userIndex === -1) {
//             console.log("Error: User not found. Logging out...");
//             break;
//         }

//         switch (task) {
//             case 1: // Deposit
//                 const depositAmount = parseFloat(await askQuestion("Enter amount to deposit: "));
//                 if (depositAmount > 0) {
//                     data[userIndex].balance =Number(data[userIndex].balance) + depositAmount;
//                     data[userIndex].transactions.push({
//                         type: "deposit",
//                         amount: depositAmount,
//                         date: new Date().toISOString().split('T')[0]
//                     });
//                     await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//                     console.log(`Deposited $${depositAmount} successfully!`);
//                 } else {
//                     console.log("Invalid amount.");
//                 }
//                 break;

//             case 2: // Withdraw
//                 const withdrawAmount = parseFloat(await askQuestion("Enter amount to withdraw: "));
//                 if (withdrawAmount > 0 && withdrawAmount <= data[userIndex].balance) {
//                     data[userIndex].balance -= withdrawAmount;
//                     data[userIndex].transactions.push({
//                         type: "withdraw",
//                         amount: withdrawAmount,
//                         date: new Date().toISOString().split('T')[0]
//                     });
//                     await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//                     console.log(`Withdrew $${withdrawAmount} successfully!`);
//                 } else {
//                     console.log("Invalid amount or insufficient balance.");
//                 }
//                 break;

//             case 3: // Balance
//                 console.log(`Your current balance is: $${data[userIndex].balance}`);
//                 break;

//             case 4: // Transactions
//                 if (data[userIndex].transactions.length > 0) {
//                     console.log("\nTransaction History:");
//                     data[userIndex].transactions.forEach(t => {
//                         console.log(`${t.date} - ${t.type} - $${t.amount}`);
//                     });
//                 } else {
//                     console.log("No transactions found.");
//                 }
//                 break;

//             case 0:
//                 console.log("Logging out...");
//                 break;

//             default:
//                 console.log("Invalid option. Please try again.");
//                 break;
//         }
//     }
// }


async function submain(accountID, pin) {
    const filePath = 'users.json';
    const eventEmitter = new EventEmitter();

    // Load user
    const data = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    const userIndex = data.findIndex(u => u.accountID === accountID && u.pin === pin);

    if (userIndex === -1) {
        console.log("Error: User not found. Logging out...");
        return;
    }

    // --- Event Handlers ---
    eventEmitter.on('deposit', async (amount) => {
        if (amount > 0) {
            data[userIndex].balance += amount;
            data[userIndex].transactions.push({
                type: "deposit",
                amount,
                date: new Date().toISOString().split('T')[0]
            });
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));
            console.log(`Deposited $${amount} successfully!`);
        } else {
            console.log("Invalid amount.");
        }
    });

    eventEmitter.on('withdraw', async (amount) => {
        if (amount > 0 && amount <= data[userIndex].balance) {
            data[userIndex].balance -= amount;
            data[userIndex].transactions.push({
                type: "withdraw",
                amount,
                date: new Date().toISOString().split('T')[0]
            });
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));
            console.log(`Withdrew $${amount} successfully!`);
        } else {
            console.log("Invalid amount or insufficient balance.");
        }
    });

    eventEmitter.on('checkBalance', () => {
        console.log(`Your current balance is: $${data[userIndex].balance}`);
    });

    eventEmitter.on('viewTransactions', () => {
        const transactions = data[userIndex].transactions;
        if (transactions.length > 0) {
            console.log("\nTransaction History:");
            transactions.forEach(t => {
                console.log(`${t.date} - ${t.type} - $${t.amount}`);
            });
        } else {
            console.log("No transactions found.");
        }
    });

    eventEmitter.on('exit', () => {
        console.log("Logging out...");
        process.exit(0);
    });

    // --- Main Menu Loop ---
    console.log("\nWelcome to the ATM Management System!");
    while (true) {
        console.log("\n1. Depositing Money");
        console.log("2. Withdrawing Money");
        console.log("3. Checking Balance");
        console.log("4. Viewing Transaction History");
        console.log("0. Exit");

        const choice = parseInt(await askQuestion("Choose a number: "));

        switch (choice) {
            case 1:
                await eventEmitter.emit('deposit', parseFloat(await askQuestion("Enter amount to deposit: ")));
                break;
            case 2:
                await eventEmitter.emit('withdraw', parseFloat(await askQuestion("Enter amount to withdraw: ")));
                break;
            case 3:
                await eventEmitter.emit('checkBalance');
                break;
            case 4:
                await eventEmitter.emit('viewTransactions');
                break;
            case 0:
                eventEmitter.emit('exit');
                break;
            default:
                console.log("Invalid option. Please try again.");
        }
    }
}

main();
