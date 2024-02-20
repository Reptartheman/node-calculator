const rs = require('readline-sync');
let counter = 0;

let questionOne = rs.question('What operation would you like to perform? ', {
  limit: ['+', '-', '*', '/'],
  limitMessage: 'That is not a valid operation. Choose only: +, -, * or /'
});
let questionTwo = rs.questionInt('Please enter the first number ');
let questionThree = rs.questionInt('Please enter the second number ');


if (questionOne === '+') {
  addNumbers();
} else if (questionOne === '-') {
  subtractNumbers();
} else if (questionOne === '*') {
  multiplyNumbers();
} else if (questionOne === '/') {
  divideNumbers(); 
} else {
  console.log('Oops something went wrong. Press Ctrl + C to clear');
}



function addNumbers() {
  counter = (questionTwo + questionThree);
  result();
}

function subtractNumbers() {
  counter = (questionTwo - questionThree);
  result();
}

function multiplyNumbers() {
  counter = (questionTwo * questionThree);
  result();
}

function divideNumbers() {
  counter = (questionTwo / questionThree);
  result();
}

function result() {
  console.log(`Your result is ${counter}`)
}


/* TO DO: 
    1. Ask the user, "What operation would you like to perform?"  
    2. Then the user enters one of these options: "/" "*" "-" "+"
    3. If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
    4. After the user enters a valid operation, ask the user, "Please enter the first number"
    5. The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
    6. After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
    7. Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
      - For example, if the user entered addition "+" and the first number was 3 and the second number was 4, the result printed would be: "The result is 7"
*/