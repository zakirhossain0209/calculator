const displayScreen = document.querySelector(".display");
const equalButton = document.querySelector("#equal-btn");

// function for equal button
equalButton.addEventListener("click", (e) => {
  if (displayScreen.value) {
    displayScreen.value = eval(displayScreen.value);
  } else {
    displayScreen.value = "Enter value";
  }
});
