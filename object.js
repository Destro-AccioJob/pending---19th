
// let obj1 = {
//     a: 1,
//     b: 2,
//     c: {x: 10, y: 20}
// }

// let obj2 = {} 
// Object.assign(obj2, obj1)
// console.log(obj2)


// let obj2  = {...obj1}



// obj1.a = 100 
// obj2.b = 200 

// console.log(obj1)
// console.log(obj2)


// let obj2 = {...obj1}


// obj1.a = 100 
// obj2.b = 200

// obj1.c.x = 1000
// obj2.c.y = 2000

// console.log(obj1)
// console.log(obj2)


// let obj1 = {
//         a: 1,
//         b: 2,
//         c: {x: 10, y: 20}
//     }

//   let obj2 =  structuredClone(obj1) // deep copy
//   obj1.c.x = 1000
//  obj2.c.y = 2000

// console.log(obj1)
// console.log(obj2)
  


let obj1 = {
        a: 1,
        b: 2,
        c: {x: 10, y: 20}
}

function abhishekClone(obj){
   let obj2 = {}


   for(let key in obj){
    obj2[key] = obj[key] // is obj2[key] a object or not
   }
   
   console.log(obj2)

}

abhishekClone(obj1)