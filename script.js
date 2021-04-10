// JavaScript for Odi App
// making sure javascript is connecting
console.log('I love Wild Dog!')


function myFunction() {
    const humanYears = document.getElementById("humanYears").value;
    console.log(humanYears)
    const dogAge = humanYears * 10;
  
    document.getElementById("dogsRealAge").innerHTML = dogAge;
  }