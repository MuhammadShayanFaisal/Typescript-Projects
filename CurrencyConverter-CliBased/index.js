#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EURO: 0.92,
    GBP: 0.78,
    INR: 83.49,
    PKR: 278.51
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EURO", 'GBP', "INR", "PKR"],
        message: "Enter from Currency"
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "EURO", 'GBP', "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount"
    }
]);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromamount;
let convertamount = baseamount * toamount;
console.log(convertamount);
