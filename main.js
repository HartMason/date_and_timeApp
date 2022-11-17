// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

const num2StringInput = document.getElementById('num2String')
const num2StringButton = document.getElementById('num2StringButton')
// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
// console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  console.log(new Date())

  document.getElementById("display-element").innerHTML = currentDate;

}
 


// num2StringInput.addEventListener
// Write a JavaScript program to convert a number to a string.
function num2String() {
  const number = document.getElementById("quantity").value
  console.log(number)

  document.getElementById("display-string").innerHTML = '"' + number + '"'
  
} // funciton declaration 

// console.log(num2String(42))


// Write a JavaScript program to convert a string to the number.
const str2Num = () => {
  // return parseInt()
  const string = document.getElementById("number").value
  console.log(parseInt(string))

  document.getElementById("display-number").innerHTML = string
}

console.log(str2Num("108"))

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
function multipleDatatype(item){
  if(typeof item === 'boolean'){
      return 'boolean'; 
  } else if(item === null){
      return 'null'; 
  } else if(item === undefined){
      return 'undefined'; 
  } else if(typeof item === 'number'){
      return 'number';
  } else if(typeof item === 'string'){
      return 'string';
  } else if(isNaN(item)){
      return 'NaN'; 
}
}
// Write a JavaScript program that adds 2 numbers together.

let num1 = 20
let num2 = 15

const add = (num1, num2) => {
  return num1 + num2
} 
console.log(add(num1, num2))


// Write a JavaScript program that runs only when 2 things are true.
function bothTrue(name, age) {
if(name && age > 33) {
  return true
}
  else { 
    return false;
  }
}

console.log(bothTrue('Matt', 34));
// Write a JavaScript program that runs when 1 of 2 things are true.

// const runWhenOneTrue = (num1, num2) => {
//   if(num1 === true  num2 === false) {
//     return 'true';
//   }
// }





// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24