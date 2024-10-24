//Question-1
var a = +prompt("enter a:");
var b = +prompt("enter b:");
var c = +prompt("enter c:");
if (a + b > c && b + c > a && c + a > b) alert("It is a Triangle...");
else alert("It is not a Triangle...");

//Question-2
var num = +prompt("Enter the num: ")
var isPrime = true
if (num < 2) {
    isPrime = false;
}
else {
    for (i = 2; i < num; i++) {
        if (num % 2 === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log("Prime");
}
else {
    console.log("Not Prime");
}

//Question-3
var a = +prompt("enter the value:");
var b = +prompt("enter the value:");
var c = +prompt("enter the value:");
if (a > b && a > c) alert("a is greater than b and c");
else if (b > a && b > c) alert("b is greater than a and c");
else if (c > b && c > a) alert("c is greater than b and a");
else alert("enter the numeric values!")

//Question-4
var year = +prompt("Enter the year:")
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) alert("It is a leep year");
else alert("It is not a leep year");

//Question-5
var num = +prompt("Enter the value");
if (num % 3 == 0 && num % 5 == 0) alert("It is a Fizz and Buzz");
else if (num % 3 == 0) alert("It is a Fizz");
else if (num % 5 == 0) alert("It is a Buzz");
else alert(`${num} is not div by 3 or 5`);

//Question-6
var a = +prompt("Enter the value:");
var b = +prompt("Enter the value:");
var operater = prompt("Enter the operater('+,-,/,*'):");
switch (operater) {
    case "+":
        alert(a + b);
        break;
    case "-":
        alert(a - b);
        break;
        // case "/":
        alert(a / b);
        break;
    case "*":
        alert(a * b);
        break;
    default:
        alert("Enter the numeric values!");
}