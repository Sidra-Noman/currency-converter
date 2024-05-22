#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    // USD is base currency
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.30,
    PKR: 277,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        type: 'list',
        message: 'Enter From Currency',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        type: 'list',
        message: 'Enter To Currency',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number'
    }
]);
// Exchange rate
let fromAmount = currency[user_answer.from];
// Exchange rate
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
// USD base currency
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)
