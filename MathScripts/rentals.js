let people;

people = 28;

let vanCost = 250;

let numVans = Math.ceil(people/15);
let totalCost = numVans * vanCost;
let costPer = (totalCost/people).toFixed(2);

console.log(people + ' are on the tour. The number of vans needed are ' + numVans + ' with a total cost of ' + totalCost + ' and each person would pay ' + costPer);