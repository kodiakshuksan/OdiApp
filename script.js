// JavaScript for Odi App
// making sure javascript is connecting
console.log('I love Wild Dog!')


// // your form
// const x = document.getElementById("humanYears").value;
// console.log(x)

// const dogAge = function(event) {
// humanYears * 10 
//     console.log(humanYears)
//     event.preventDefault(); 
    
//     document.getElementById("dogsRealAge").innerHTML = dogAge;
    
// };

// const newDogAge = dogAge;

// attach event listener
// humanYears.addEventListener("submit", dogAge);

function myFunction() {
    const humanYears = document.getElementById("humanYears").value;
    console.log(humanYears)
  
    document.getElementById("dogsRealAge").innerHTML = humanYears;
  }