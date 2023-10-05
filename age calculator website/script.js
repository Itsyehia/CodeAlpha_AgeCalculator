let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");


function calculateAge() {
  let birthdate = new Date(userInput.value);
  let today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();
  let monthDiff = today.getMonth() - birthdate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

    result.innerHTML = `You are ${age} years old`;
    
  
}


