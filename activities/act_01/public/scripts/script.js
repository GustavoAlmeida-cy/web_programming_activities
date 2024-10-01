// Getting elements
let num_input = document.getElementById("number_input");
let main_btn = document.getElementById("main_btn");
let result = document.getElementById("result");

// Functions
function loseFocus() {
  // Function that prevents user to focus on an input tag with the keyboard.
  document.getElementById("result").blur();
}

function guess(num) {
  // Function that guess if a number is even or odd and shows to the user the result.

  num = num_input.value; // Get input value.

  // Check if the input value is valid.
  if (num === " " || num === "" || isNaN(num)) {
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
