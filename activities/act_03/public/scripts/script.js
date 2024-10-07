// Getting elements.
const theme_btn_checkbox = document.getElementById("theme_checkbox");
const first_num_input = document.getElementById("first_number_input");
const second_num_input = document.getElementById("second_number_input");
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

function calc_rect_area() {
  // Function that guess if a number is even or odd and shows to the user the result.
  let first_num = first_num_input.value; // Get input value.
  let second_num = second_num_input.value; // Get input value.

  // Check if the input value is valid.
  if (first_num === " " || first_num === "" || isNaN(first_num)) {
    first_num_input.value = "";
    second_num_input.value = "";
    result.value = "";
    return window.alert("Invalid value!");
  } else if (second_num === " " || second_num === "" || isNaN(second_num)) {
    first_num_input.value = "";
    second_num_input.value = "";
    result.value = "";
    return window.alert("Invalid value!");
  }

  first_num = Number(first_num);
  second_num = Number(second_num);

  // Check if the numbers are equal.
  if (first_num === second_num) {
    return (result.value = "This is a square, not a rectangle!");
  }

  // Make the area calculation;
  return (result.value = first_num * second_num + "m²");
}
