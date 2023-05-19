const colorsList = ["green", "red", "blue", "orange", "black", "pink"]; // list of colors

const btnClick = document.querySelector(".click-me");
const colorInfo = document.querySelector(".color-topic");

const randomBodyColor = () => {
  const randomNum = Math.trunc(Math.random() * colorsList.length); // generate random number of length of colorsList
  console.log(randomNum);
  document.body.style.backgroundColor = colorsList[randomNum];
  colorInfo.textContent = colorsList[randomNum];
};

btnClick.addEventListener("click", randomBodyColor);
