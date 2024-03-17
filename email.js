let gender = "female";
let greeting = "";

function genderValue() {
  if (gender === "female") {
    greeting = "Dear Madam Anderson";
  } else if (gender === "male") {
    greeting = "Dear Sir Anderson";
  } else {
    greeting = "Dear Mx. Anderson";
  }
}

document.addEventListener("", genderValue());

document.querySelector(".message__greeting").textContent = greeting;
