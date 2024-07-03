#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
console.log("Your balance is: ", mybalance);
let myPin = 8041;
let pinans = await inquirer.prompt([
    {
        name: "q1",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinans.q1 == myPin) {
    console.log("Correct Pin code");
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "Select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcheque"]
        }
    ]);
    if (operationans.operation === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type: "input",
                validate: (input) => {
                    const numberInput = Number(input);
                    if (numberInput > mybalance) {
                        return ("Amount cannot be greater than the balance");
                    }
                    return true;
                },
            }
        ]);
        mybalance -= amountans.amount;
        console.log(`Your Remaining balance is: ${mybalance}`);
    }
    else if (operationans.operation === "check balance") {
        console.log(`You current balance is: ${mybalance}`);
    }
    else if (operationans.operation === "fastcheque") {
        let ch = await inquirer.prompt([
            {
                name: "choic",
                message: "Please select below any of the payment if you want",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        mybalance -= ch.choic;
        console.log(`Your Remaining balance is: ${mybalance}`);
    }
}
else
    console.log("Incorrect pin number");
