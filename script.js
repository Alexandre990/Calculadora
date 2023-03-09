function displayResult(character) {
  const display = document.querySelector(".display").value;

  document.querySelector(".display").value = display + character;
}

function clearDisplay() {
  document.querySelector(".display").value = "";
}

function calculationResult() {
  const display = document.querySelector(".display").value;

  document.querySelector(".display").value = eval(display);
}

function moreAndLess() {
  const display = document.querySelector(".display").value;

  document.querySelector(".display").value = display * -1;
}
