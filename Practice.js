// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("Ahmed Zubayer Rahman"));

// function reverseAnotherString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseAnotherString("Ahmed Zubayer Rahman"));

// array = [1, 2 , 3, 4, 5];

// function reverse(){
//   let size =  array.length;
  
//   for (let index = 0; index < size/2 ; index++) {
//     let temp = array[index];
//     array[index] = array[size - 1 - index];
//     array[size - 1 - index] = temp; 
//   }
// }

// reverse(array);
// console.log(array);

// let a = 1;
// let b = 2;
// array1 = [3, 4];
// array2 = [5, 6];

// for(let index = 0; index < array.length; index++){
//   let temp = array1[0];
//   array1[0] = array2[1];
//   array2[1] = temp;
// }

// console.log(array1);
// console.log(array2);

// for(let index = 0; index < array.length; index++){
//   let temp = a;
//   a = array2[0];
//   array2[0] = temp;
// }

// console.log(array1);
// console.log(array2);

// for(let index = 0; index < array.length; index++){
//   let temp = b;
//   a = array1[1];
//   array1[1] = b;
// }

// console.log(array1);
// console.log(array2);



// The following variables are defined in the global scope
// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"

function sum() {
  
  total = 0;
  
  for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] != "number") {
        return "try a number";
      }
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 1, 2, 3)); // Output: 7
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(10, 20, 30)); // Output: 60
console.log(sum("asd", 2, 3)); // Output: Try a number






