"use strict"

/*1*/ 
let age = prompt("How old are you?");
if(age <=12){
    alert("You are child");
}
if(age > 12 && age < 18){
    alert("You are teenager");
}
if(age >= 18 && age <= 60){
    alert("You are adult");
}
if(age > 60){
    alert("You are adult");
}

/*2*/ 
let num = prompt("Enter a number 0-9");
switch(num){
    case "1":
        alert("!");
        break;
    case "2":
        alert("@");
        break;
    case "3":
        alert("#");
        break;
    case "4":
        alert("$");
        break;
    case "5":
        alert("%");
        break;
    case "6":
        alert("^");
        break;
    case "7":
        alert("&");
        break;
    case "8":
        alert("*");
         break;
         case "9" :
            alert("(")
            break;
        case "0" :
            alert("Bye");
            break;
        default:
            alert("Wrong number");
}


/*3*/ 

let number = prompt("Enter a three-digit number");

if (number[0] === number[1] && number[1] === number[2]) {
    alert("This number has 3 same digits");
} 
else if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) {
    alert("This number has 2 same digits");
} 
else {
    alert("This number has no same digits");
}


/*4*/ 
let  year = prompt("Enter a year");
if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    alert("This year is a leap year");
}
else{
    alert("This year is not a leap year");
}

/*5*/ 
let valute = prompt("Enter a coun tof USD");
let convert = prompt("Enter a valute to convert(EUR,UAN,AZN): ");

const EUR = 1.17;
const UAN = 0.15;
const AZN = 0.59;

let result;

switch(convert){
    case "EUR":
        result = valute * EUR;
        break;
    case "UAN":
        result = valute * UAN;
        break;
    case "AZN":
        result = valute * AZN;
        break;  
    default:
        alert("Wrong valute");
        result = null;
}

if(result !== null){
    alert(`You have ${result} ${convert}`);
}

/*6*/ 
let sum = prompt("Enter a sum of buying");
let discount = 0;

if(sum>= 200 && sum <300){
    alert("You have 3% discount");
    discount = sum * 0.03;
}
if(sum >= 300 && sum < 500){
    alert("You have 5% discount");
    discount = sum * 0.05;
}
if(sum >= 500){
    alert("You have 7% discount");
    discount = sum * 0.07;
}
let resultSum = sum - discount;
alert(`Your sum with discount is ${resultSum}`);


/*7*/ 
let wantPlay = prompt("Hi! I have for you 3 questions. Do you want to play with me? (Type 'yes' to play)");

if (wantPlay === "yes") {
    let score = 0; 
    let correctAnswersCount = 0;

    let answer = prompt(`Which human body organ has the greatest mass?
        1)Skin
        2)Liver
        3)Lungs`);
    
    let answer2 = prompt(`Which country has the largest land area in the world?
        1)Russia
        2)Canada
        3)China`);
    
    let answer3 = prompt(`Which of these is an object in JavaScript?
        1) { "name": "Gemini" }
        2) [1, 2, 3] 
        3)"Hello" `);

    switch (answer) {
        case "1":
            
            score += 2;
            break;
        default:
            alert("Wrong answer!");
    }

    switch (answer2) {
        case "1":
            
            score += 2;
            break;
        default:
            alert("Wrong answer!");
    }

    switch (answer3) {
        case "1":
            
            score += 2;
            break;
        default:
            alert("Wrong answer!");
    }
    alert(`Game over! You answered correctly to ${correctAnswersCount} questions. Your total score is: ${score} points.`);
} else {
    alert("Bye! See you later!");
}

/*7*/ 
let start = prompt("Hi! I have a quiz for you. Do you want to play?");
alert("Ok, let's start! Good Luck.");
alert("------ ANIMALS QUIZ ------");

let score = 0;
let errors = "";

let q1 = prompt("1. Which animal is the largest land mammal? \nA) African elephant; B) Giraffe; C) Hippopotamus; D) White rhinoceros.");
if (q1 == "A") { score++; } 
else { errors += "1. Largest land mammal\n"; }

let q2 = prompt("2. Which bird can fly backwards? \nA) Swallow; B) Hummingbird; C) Sparrow; D) Owl.");
if (q2 == "B") { score++; } 
else { errors += "2. Bird flying backwards\n"; }

let q3 = prompt("3. Which animal is the fastest on land? \nA) Lion; B) Wildebeest; C) Cheetah; D) Zebra.");
if (q3 == "C") { score++; } 
else { errors += "3. Fastest animal\n"; }

let q4 = prompt("4. How many chambers are in the heart of most mammals? \nA) 2; B) 3; C) 4; D) 5.");
if (q4 == "C") { score++; } 
else { errors += "4. Heart chambers\n"; }

let q5 = prompt("5. Which animal is the only flying mammal? \nA) Flying squirrel; B) Eagle; C) Hummingbird; D) Bat.");
if (q5 == "D") { score++; } 
else { errors += "5. Only flying mammal\n"; }

let q6 = prompt("6. What is a baby kangaroo called? \nA) Calf; B) Joey; C) Puppy; D) Kitten.");
if (q6 == "B") { score++; } 
else { errors += "6. Baby kangaroo\n"; }

let q7 = prompt("7. Which ocean dweller is the largest on the planet? \nA) Sperm whale; B) Blue whale; C) Great white shark; D) Orca.");
if (q7 == "B") { score++; } 
else { errors += "7. Largest ocean dweller\n"; }

let q8 = prompt("8. Which animal has three hearts? \nA) Starfish; B) Crab; C) Octopus; D) Jellyfish.");
if (q8 == "C") { score++; } 
else { errors += "8. Animal with three hearts\n"; }

let q9 = prompt("9. To which family does the hyena actually belong? \nA) Felidae; B) Canidae; C) Hyaenidae; D) Ursidae.");
if (q9 == "C") { score++; } 
else { errors += "9. Hyena family\n"; }

let q10 = prompt("10. Which fish can move on land? \nA) Goldfish; B) Shark; C) Anabas; D) Salmon.");
if (q10 == "C") { score++; } 
else { errors += "10. Fish on land\n"; }

alert("Quiz Finished! \nYour score: " + score + "/10 \n\nErrors in: \n" + errors);










