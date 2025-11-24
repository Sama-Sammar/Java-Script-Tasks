// 1. var, let, const differences

var oldVar = "I am var"; // function-scoped, can be reassigned, hoisted
let ageLet = 20; // block scoped, can be reassigned
const PI = 3.14; // block scoped, cannot be reassigned

// Demonstrating reassignment
ageLet = 25;
oldVar = "var changed";

// Scope example
{
    let insideBlock = "visible only here";
    var varInsideBlock = "accessible outside block";
}
// varInsideBlock is accessible; insideBlock is not

// 2. Different data types + typeof

const str = "Sama";
const num = 40;
const isActive = true;
let undef;
const nul = null;
const obj = { a: 1 };
const arr = [1, 2, 3];
function func() { }

console.log("-Different data types + typeof");
console.log(typeof str, typeof num, typeof isActive, typeof undef, typeof nul, typeof obj, typeof arr, typeof func);

// 3. Student profile strings

let studentName = "Omar";
let level = "Beginner";
let sentence1 = "Student Name: " + studentName + "\nLevel: " + level;
let sentence2 = `Student Name: ${studentName} — Level: ${level}`; 
// template literals

console.log("-Student profile strings");
console.log(sentence1);
console.log(sentence2);

// 4. String methods

console.log("-String methods");

let mystr = "   hello world   ";
console.log(mystr.trim()); // delete spaces
console.log(studentName.slice(0, 2)); // Om
console.log(level.toUpperCase());
console.log(level.includes("gin"));
console.log("Hi ".repeat(3));
console.log(level.replace("Beginner", "Intermediate"));

// 5. Operators + coercion

console.log("-Operators + coercion");
let x = 10;
x += 5;
console.log(x);
console.log(+"5"); // unary plus → number
console.log(-"3"); // unary minus
console.log("5" * 2); // implicit coercion
console.log(Number("50"));
console.log(String(100));
console.log(Boolean(1));

// 6. Numbers + Math

console.log("-Numbers + Math");

let n = 9.567;
console.log(n.toFixed(2));
console.log(parseInt("20px"));
console.log(parseFloat("3.14abc"));
console.log(Number.isInteger(10));
console.log(Math.floor(2.8)); //2
console.log(Math.ceil(2.2)); //3
console.log(Math.max(10, 5, 77));
console.log(Math.random());

// 7. User Input 

let inputName = String(prompt("Enter name:")).toUpperCase();
let inputAge = Number(prompt("Enter age:"));
let activeInput = String(prompt("Are you active? (yes/no)")).toLowerCase();
let grade1 = Number(prompt("Grade 1:"));
let grade2 = Number(prompt("Grade 2:"));
let grade3 = Number(prompt("Grade 3:"));

// 8. Classification

let avg = (grade1 + grade2 + grade3) / 3;
let status = "";

if (avg >= 85) {
    status = "Excellent";
}
else if (avg >= 60) {
    status = "Good";
}
else {
    status = "Needs Improvement";
}

// ternary operator
let shortStatus = avg >= 85 ? "Excellent" 
: avg >= 60 ? "Good" 
: "Needs Improvement";

// 9. ?? and || operators

inputName = inputName ?? "Unknown";
inputAge = inputAge || 18;

// 10. Student Object

let student = {
    id: Math.floor(Math.random() * 1000),
    name: inputName,
    age: inputAge,
    grades: [grade1, grade2, grade3],
    isActive: activeInput === "yes"
};

// 11. Array of students operations

console.log("-Array of students operations");

let students = [];
students.push(student);// from user

students.push({ id: 2, name: "Lana", age: 21, grades: [88, 90, 75], isActive: true });
students.pop(); // lana deleted 

students.push({ id: 3, name: "Omar", age: 19, grades: [99, 80, 70], isActive: false });

let found = students.find(s => s.name === "Omar");// Omar object in found 
console.log(found);
console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
let sliced = students.slice(0, 2);// first 2
console.log(sliced);
let allNames = students.map(s => s.name).join(", ");// just names
console.log(allNames);

// 12. Loops

console.log("-Loops");

for (let s of students)
    console.log(s.name);

for (let i = 0; i < students.length; i++) {
    console.log(students[i].grades);
}

let i2 = 0;
while (i2 < students.length) {
    if (!students[i2].isActive) {
        i2++;
        continue;
    }
    console.log("Active:", students[i2].name);
    i2++;
}

outer:
for (let s of students) {
    for (let g of s.grades) {
        if (g < 50)
            break outer;
    }
}

// 13. Add 5 random grades

students.forEach(s => {
    for (let j = 0; j < 5; j++) {
        s.grades.push(Math.floor(Math.random() * 100));
    }
});

// 14. Nested loops printing

console.log("-Nested loops printing");

for (let s of students) {
    for (let g of s.grades) {
        console.log(s.name, g);
    }
}

// 15. Report

console.log("-Report");

students.forEach(s => {
    let avg = s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
    let maxGrade = Math.max(...s.grades);
    let classification = avg >= 85 ? "Excellent" 
    : avg >= 60 ? "Good" 
    : "Needs Improvement";

    console.log(`ID: ${s.id}
Name: ${s.name}
Average: ${avg.toFixed(2)}
Highest: ${maxGrade}
Active: ${s.isActive ? "Yes" : "No"}
Status: ${classification}\n`);
});

// 16. Summary with console.table

console.log("-Summery Table");

console.table(students.map(s => ({
    Name: s.name,
    Average: (s.grades.reduce((a, b) => a + b, 0) / s.grades.length).toFixed(2),
    Status: (s.grades.reduce((a, b) => a + b, 0) / s.grades.length) >= 85 ? "Excellent" 
    : (s.grades.reduce((a, b) => a + b, 0) / s.grades.length) >= 60 ? "Good" 
    : "Needs Improvement",
    Active: s.isActive ? "Active" : "Inactive"
})));