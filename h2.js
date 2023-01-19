
function log1() {
    console.log(age);  // 20, error
}

function print() {
    function log2() {
      console.log(age);  // 20, error
    }
  
    const age = 20;
    // log1()
    log2();
    
}
  
print(); 