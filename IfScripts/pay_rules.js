let payRate;
let hoursWorked;
let totalPay;

payRate = 17.30;
hoursWorked = 45;

let overTimeRate = payRate * 1.5;
let overTimeHours = hoursWorked - 40;


if (hoursWorked <= 40) {
    totalPay = hoursWorked * payRate
    console.log(totalPay.toFixed(2));
}
else {
    totalPay = ((overTimeHours * overTimeRate) + (payRate * 40));
    console.log(totalPay.toFixed(2));
}
