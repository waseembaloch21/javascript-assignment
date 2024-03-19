//chapter18

//answer1

for (let i = 1;  i <=10; i++) {
   console.log (i);
}

//answer2

for (let i = 1; i <=20; i++) 
    if (i % 2 === 0) {            
        console.log(i);  
    
}

//answer3


for (let i = 1; i <= 15; i++) { 
    if (i % 2 !== 0) {            
        console.log(i);           
    }
}

//answer4


let number = 5;
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i; 
    console.log("The factorial of", number, "is:", factorial);
}

//answer5

let numbers = prompt("Enter a number");
for (let i = 1; i <= 10; i++) { 
    let product = numbers * i;
    document.write(numbers + " * " + i + " = " + product,"<br>");
}

//answer6


