// Part 1: JavaScript Basics

// Variables and Data Types
const name = "John Doe"; // string
const age = 25; // number
const isStudent = true; // boolean
const hobbies = ["reading", "coding", "gaming"]; // array
const person = { firstName: "John", lastName: "Doe" }; // object

// Logging values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Choose an operation (+, -, *, /):");

let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else {
    result = "Invalid operation!";
}

console.log(`Result: ${result}`);

// Functions: greetUser
function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

// Display greeting message in an HTML element
const greetingMessage = greetUser("John");
document.getElementById("dynamic-content").innerHTML = `<p>${greetingMessage}</p>`;

// Part 2: JavaScript Control Structures

// If Statements: Check Voting Eligibility
const userAge = parseInt(prompt("Enter your age:"));
let eligibilityMessage;

if (userAge >= 18) {
    eligibilityMessage = "You are eligible to vote!";
} else {
    eligibilityMessage = "You are not eligible to vote yet.";
}

document.getElementById("dynamic-content").innerHTML += `<p>${eligibilityMessage}</p>`;

// Loops: Display Numbers 1 to 10
const numberList = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}
document.getElementById("dynamic-content").appendChild(numberList);

// Part 3: Introduction to the DOM

// Change the text of the <h1> element
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add a new <p> inside the dynamic-content <div>
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);