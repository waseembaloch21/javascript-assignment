//chapter13-16

//answer1
let studentNames = [];

studentNames.push("Waseem");
studentNames.push("Ali");
studentNames.push("Taif");

let newName = "Saif";
if (newName) {
    studentNames.push(newName);
}

console.log(studentNames[0]); 
console.log(studentNames[1]); 
console.log(studentNames[2]);
console.log(studentNames[3]);

//answer2

let students = [];

students.push({ name: "Waseem", age: 19, grade: "A"});
students.push({ name: "Ali", age: 17, grade: "A"});
students.push({ name: "Taif", age: 18, grade: "A"});

let newStudent = { name: "Saif", age: 19, grade: "A" };
if (newStudent) {
    students.push(newStudent);
}

console.log(students[0]); 
console.log(students[1]); 
console.log(students[2]); 
console.log(students[3]); 


//answer3

let strings = ["apple", "banana", "orange", "grapes"];

console.log(strings[0]); 
console.log(strings[1]); 
console.log(strings[2]); 
console.log(strings[3]); 

//answer4

let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); 

console.log(numbers[1]); 

console.log(numbers[2]);

console.log(numbers[3]);

console.log(numbers[4]); 

//answer5

let boolean = [true, false, true, false];

console.log(boolean[0]); 

console.log(boolean[1]); 

console.log(boolean[2]); 

console.log(boolean[3]); 

//answer6


let mixed = {
    name: "Waseem",
    age: 19,
    isStudent: true,
    grades: [90, 85, 88]
};
console.log(mixed);

//answer7

let education = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]

console.log("Qualifications",education);

//answer10

let studentScores = [85, 72, 93, 65, 77];

console.log("Original scores:", studentScores);

studentScores.sort((a, b) => a - b);

console.log("Sorted scores:", studentScores);

//answer11


let cities = ["Gwader", "pasani", "Turbat", "Ormara", "Winder"];

console.log("Original cities array:", cities);

let selectedCities = [];

selectedCities = cities.slice(0, 3); 

console.log("Selected cities array:", selectedCities);

//answer12


var arr = ["This", "is", "my", "cat"];

var singleString = arr.join(" ");

console.log("Array:", singleString);



