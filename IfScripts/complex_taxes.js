let hours = 8;
let pay = 17;
let days = 5;
let weeklyHours = hours * days;
let weeklyPay = 17 * weeklyHours;
let annualPay = 52 * weeklyPay;
let marital = "single";
let taxRate;


if (marital == "single") {
    if (annualPay < 12000) {
        taxRate = (0.05).toFixed(2)
    } else if (annualPay >= 12000 && annualPay < 25000) {
        taxRate = (0.10).toFixed(2)
    } else if (annualPay >= 25000 && annualPay < 75000) {
        taxRate = (0.15).toFixed(2)
    } else if (annualPay >= 75000) {
        taxRate = (0.20).toFixed(2)
    } else {
        console.log("Error!!")
    }
}   
else if (marital == "joint") {
    if (annualPay < 12000) {
        taxRate = (0.00).toFixed(2)
    } else if (annualPay >= 12000 && annualPay < 25000) {
        taxRate = (0.06).toFixed(2)
    } else if (annualPay >= 25000 && annualPay < 75000) {
        taxRate = (0.11).toFixed(2)
    } else if (annualPay >= 75000) {
        taxRate = (0.20).toFixed(2)
    } else {
        console.log("Error!!")
    }
} else {
    console.log("Error!!")
}

let weeklyTax = taxRate * weeklyPay;

console.log("You worked " + weeklyHours + " hours this period.");
console.log("Because you earn $" + pay.toFixed(2) + " per hour, your gross pay is $" + weeklyPay.toFixed(2));
console.log("Your filing status is " + marital);
console.log("Your tax withholdings this period is $" + weeklyTax.toFixed(2));
console.log("Your net pay is $" + (weeklyPay-weeklyTax).toFixed(2));