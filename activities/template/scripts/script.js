// Getting elements
let theme_btn = document.getElementById("theme_btn");
let num_input = document.getElementById("number_input");
let main_btn = document.getElementById("main_btn");
let result = document.getElementById("result");

// Functions

// Add an event of click to the theme button to change the theme
theme_btn.addEventListener("click", (e) => {
  document.body.classList.toggle("dark_theme");
});

function loseFocus() {
  // Function that prevents user to focus on an input tag with the keyboard.
  result.blur();
  main_btn.blur();
}
