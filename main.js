const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.querySelector(".result");

const random = Math.floor(Math.random() * 100) + 1;
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(random);
  let user = input.value;
  if (user == random) {
    result.innerHTML = "";
    result.innerHTML = "you Win!";
  } else if (user < random) {
    result.innerHTML = "";
    result.innerHTML = "Your Guess is tooo low";
  } else {
    result.innerHTML = "";
    result.innerHTML = "your Guess is too high";
  }
});
