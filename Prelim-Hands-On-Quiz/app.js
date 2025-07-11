const calc = require('./calculation');
const ratePerHour = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;
const grossIncome = calc.multiply(ratePerHour, calc.multiply(hoursPerDay, daysPerWeek));
const tax = calc.multiply(grossIncome, 0.10);
const sss = 1200;
const pagibig = 300;
const philhealth = 400;
const totalDeductions = calc.add(tax, calc.add(sss, calc.add(pagibig, philhealth)));
const netSalary = calc.subtract(grossIncome, totalDeductions);

console.log(`The gross income is ${grossIncome}.`);
console.log(`Tax: ${tax}`);
console.log(`SSS: ${sss}`);
console.log(`Pag-ibig fund: ${pagibig}`);
console.log(`PhilHealth: ${philhealth}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`The net salary is ${netSalary}.`);
