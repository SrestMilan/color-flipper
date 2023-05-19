const colorsList = ["green", "red", "blue", "orange", "black", "pink"]; // list of colors in array
const btnClick = document.querySelector(".click-me"); // element select of button
const colorInfo = document.querySelector(".color-topic"); // element select of color

const randomBodyColor = () => {
  const randomNum = Math.trunc(Math.random() * colorsList.length); // 0-6 but 6 is exclusive
  document.body.style.backgroundColor = colorsList[randomNum]; // change the backgroundColor of body
  colorInfo.textContent = colorsList[randomNum]; // change text content according to background color
};

btnClick.addEventListener("click", randomBodyColor); // button handle
