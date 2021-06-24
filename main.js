const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.querySelector(".result");
const rulesBtn = document.getElementById("button-rules");
const rules = document.querySelector(".rules");
let counter = 0;
const random = Math.floor(Math.random() * 100) + 1;
button.addEventListener("click", (e) => {
  e.preventDefault();
  counter++;
  console.log(counter);
  console.log(random);
  let user = input.value;

  if (user == random) {
    result.innerHTML = "";
    result.innerHTML = `you Win! In ${counter} Moves`;
  } else if (user < random) {
    result.innerHTML = "";
    result.innerHTML = "Your Guess is tooo low";
  } else {
    result.innerHTML = "";
    result.innerHTML = "your Guess is too high";
  }
});

rulesBtn.addEventListener("click", () => {
  rules.classList.toggle("open");
});
