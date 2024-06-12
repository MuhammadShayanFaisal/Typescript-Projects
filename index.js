#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "Firstnumber" },
    { message: "Enter second Number", type: "number", name: "Secondnumber" },
    {
        message: "Select any  one of to perform Operation: ",
        type: "list",
        name: "operations",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operations === "Addition")
    console.log("Addition is", answer.Firstnumber + answer.Secondnumber);
else if (answer.operations === "Subtraction")
    console.log("Subtraction is: ", answer.Firstnumber - answer.Secondnumber);
else if (answer.operations === "Multiplication")
    console.log("Multiplication is: ", answer.Firstnumber * answer.Secondnumber);
else if (answer.operations === "Division")
    console.log("Division is: ", answer.Firstnumber / answer.Secondnumber);
else
    console.log("Invalid option");
