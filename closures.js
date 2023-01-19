
// // function sum(a){
// //     // a = 10
// //     console.log("Sum")
// //     function sumAgain(b){
// //         // b = 20
// //         console.log(a+b)
// //     }
// //     return sumAgain
// // }


// // let x = sum(10)

// // // x = sumAgain

// // x(20) // 


// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     }
//   }
//   let counter = makeCounter();

// //   counter = function() {
// //     return count++; // count++, ++count
// //   }


//   console.log(counter()); 
//   console.log(counter()); 
//   console.log(counter()); 
  

//   a = 10
//   let x = a++ 

//   x = a  // 10
//   a = a + 1 // 11


//   b = 10 
//   y = ++b 
//   b = b+1  //11
//   y = b  // 11
  







// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     }
//   }
//   let add5 = makeAdder(5);
//   let add10 = makeAdder(10);
//   console.log(add5(3)); 
//   console.log(add10(3)); 


// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(function() { return i*i });
// }
// console.log(arr[1]());
// console.log(arr[3]());



// a = [
// function() { return 0 },  
// function() { return 1 },  
// function() { return 4 },  
// function() { return 9 }, 
//  function() { return 16 }
// ]

// a[3] = function() { return 9 }
// a[3]() // 9

// let x = 10

// let hello = function (){
//     console.log("Hello")
// }
















