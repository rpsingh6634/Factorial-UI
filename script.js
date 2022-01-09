function factorial(value) {
  if (value <= 1) {
      return 1;
  } else {
      return value * factorial(--value);
  }
}

function calculate() {
  var value = document.getElementById("factorial").value;
  document.getElementById("output").textContent = factorial(value);
}

function fun(){  
  document.getElementById("myForm").reset(); 
  // document.getElementById("output").reset(); 
}   


