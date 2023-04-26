let interestRate;
let initialAmount;
let years;

years = 2;
initialAmount = 100;
interestRate = 3;

let endAmount = ((initialAmount * (interestRate/100)) * years) + initialAmount;

console.log("At a " + interestRate + " interest rate, your savings account will be worth " + endAmount.toFixed(2) + " in " + years.toFixed(1) + " years")