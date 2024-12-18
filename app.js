var age = 20;
alert("I am " + age + " years old");

var visits = 2;
document.write("You have visited this site " + visits + " times" + "<br>");

var birthYear = 2002;
document.write("My birth year is " + birthYear + "<br>");

var visitorName = "Sadaf aslam";
var productTitle = "hand-bag(s)";
var quantiy = 5;
document.write(visitorName + "ordered"  + quantiy + " " + productTitle + "xyz brand.");

var firstName, lastName, age;

var myVariable;
var $dollarSign;
var _underscore;
var userName1;
var age2;

document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example: $name, _name, or name<br>");
document.write("Variable names are case sensitive.<br>");
document.write("Variable names should not be JavaScript keywords.");

var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

var difference = num1 - num2;
document.write("Difference of " + num1 + " and " + num2 + " is " + difference + "<br>");

var product = num1 * num2;
document.write("Product of " + num1 + " and " + num2 + " is " + product + "<br>");

var division = num1 / num2;
document.write("Division of " + num1 + " by " + num2 + " is " + division + "<br>");

var modulus = num1 % num2;
document.write("Modulus of " + num1 + " by " + num2 + " is " + modulus + "<br>");

var ticketPrice = 400;
var totalCost = ticketPrice * 5;
document.write("The cost of buying 5 tickets is " + totalCost + " PKR<br>");

var tableNumber = 2;
for (var i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

var priceItem1 = 500, priceItem2 = 300;
var quantityItem1 = 2, quantityItem2 = 3;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + totalCost + " PKR<br>");

var totalMarks = 500;
var marksObtained = 400;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");

var usdToPkr = 104.80;
var riyalToPkr = 28;
var totalCurrency = (10 * usdToPkr) + (25 * riyalToPkr);
document.write("Total currency in PKR: " + totalCurrency + "<br>");

var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("Result is: " + result + "<br>");

var currentYear = 2024;
var birthYear = 2000;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old.<br>");

var snack = "Chips";
var currentAge = 18;
var maxAge = 25;
var perDay = 2;
var totalSnacks = (maxAge - currentAge) * perDay * 365;

document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".<br>");
