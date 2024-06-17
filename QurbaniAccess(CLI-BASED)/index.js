#! /usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
function displaymessage() {
    const message = "EID MUBARAK!";
    console.log(chalk.green.bold(message));
    figlet(message, (err, data) => {
        if (err) {
            console.error('Error:', err);
            return;
        }
        const styledArt = chalk.red.bold(data);
        console.log(styledArt);
    });
}
function displaydetailsasbought(animal, price, color, weight, height, quality) {
    const details = `My ${animal} are with this qualities are: 
The price of this ${animal} is: ${price}
The colour of the ${animal} is: ${color}
The weight of the ${animal} is: ${weight}
The height of the ${animal} is: ${height}
The quality of the ${animal} is: ${quality}
    `;
    console.log(details);
    try {
        fs.writeFileSync("bought.txt", details);
        console.log("File 'bought.txt' created successfully!");
    }
    catch (err) {
        console.error('Error writing to file:', err);
    }
}
function displaydetailsasintendtobuy(animal, price, color, weight, height, quality) {
    const details = `Necessary Condition for buying my ${animal} are:
The range of ${animal} price should be: ${price}
The specific colour of ${animal} should be: ${color}
The approximate weight of ${animal} should be: ${weight}
The approximate height of ${animal} should be: ${height}
If possible, quality of ${animal} should be: ${quality}
    `;
    console.log(details);
    try {
        fs.writeFileSync("intendedTobuy.txt", details);
        console.log("File 'intendedTobuy.txt' created successfully!");
    }
    catch (err) {
        console.error('Error writing to file:', err);
    }
}
displaymessage();
const answer = await inquirer.prompt([
    { message: "Have you bought your animal(Yes or No) ", type: "string", name: "temp" },
]);
if (answer.temp === "Yes") {
    const a = await inquirer.prompt([
        {
            message: "Select any one of the animal : ",
            type: "list",
            name: "animal",
            choices: ["Camel", "Bell", "Cow", "Goat", "Sheep"]
        }
    ]);
    console.log("Many Many Congratulations on buying your", a.animal);
    const b = await inquirer.prompt([
        { message: `Enter the price of this ${a.animal} `, type: "number", name: "price" },
        { message: `Enter the colour of this ${a.animal}`, type: "string", name: "color" },
        { message: `Enter the weight of this ${a.animal} in kg`, type: "number", name: "weight" },
        { message: `Enter the height of this ${a.animal} in inches`, type: "number", name: "height" },
        { message: `Enter the special quality of this ${a.animal}`, type: "string", name: "quality" },
    ]);
    displaydetailsasbought(a.animal, b.price, b.color, b.weight, b.height, b.quality);
}
else {
    const a = await inquirer.prompt([
        {
            message: "Select any  one of the animal : ",
            type: "list",
            name: "animal",
            choices: ["Camel", "Bell", "Cow", "Goat", "Sheep"]
        }
    ]);
    console.log("We will help you in buying your ", a.animal);
    console.log("Answer some questions ");
    const b = await inquirer.prompt([
        { message: `Enter your range of ${a.animal} you want to buy`, type: "number", name: "price" },
        { message: `Any specific colour of ${a.animal}`, type: "string", name: "color" },
        { message: `Approximate weight ${a.animal} in kg`, type: "number", name: "weight" },
        { message: `Approximate height of ${a.animal} in inches`, type: "number", name: "height" },
        { message: `Any special quality of ${a.animal}`, type: "string", name: "quality" },
    ]);
    displaydetailsasintendtobuy(a.animal, b.price, b.color, b.weight, b.height, b.quality);
}
