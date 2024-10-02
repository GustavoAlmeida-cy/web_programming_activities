// Getting elements.
const theme_btn_checkbox = document.getElementById("theme_checkbox");
const num_input = document.getElementById("number_input");
const main_btn = document.getElementById("main_btn");
const result = document.getElementById("result");

// Always uncheck the checkbox for each reload page.
theme_btn_checkbox.checked = false;

// Functions.

// Add an event of click to the theme button to change the theme.
theme_btn_checkbox.addEventListener("click", (e) => {
  document.body.classList.toggle("dark_theme");
});

function loseFocus() {
  // Function that prevents user to focus on an input tag with the keyboard.
  result.blur();
  main_btn.blur();
}

function guess(num) {
  // Function that guess if a number is even or odd and shows to the user the result.

  num = num_input.value; // Get input value.

  // Check if the input value is valid.
  if (num === " " || num === "" || isNaN(num)) {
    num_input.value = "";
    result.value = "";
    return window.alert("Invalid value!");
  } else {
    // Make the calculation to know the guess result.
    let calc_result = num % 2;
    if (calc_result !== 0) {
      return (result.value = "Odd!");
    } else {
      return (result.value = "Even!");
    }
  }
}
