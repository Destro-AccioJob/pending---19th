

// console.log(a)

// let a = 10




// for(let i = 1; i<=1; i++){
//     // let a - tdz ( time)
//     console.log(a) 
//     let a = 20
//     console.log(a)
// }


// let age = 50;

// function printAge() {
//   console.log(age);
//   let age = 30;
// }

// printAge()


function print() {
    function log() {
      console.log(age);  // 20, error, udefined
    }
  
    const age = 20;
    log();
    
}
  
print(); 

// means in every condition we have to define before accessing it?