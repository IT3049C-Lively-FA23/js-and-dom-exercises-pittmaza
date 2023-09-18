// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const password_input = document.getElementById("password");
const reveal_button = document.getElementById("togglePassword");

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.

// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

reveal_button.addEventListener("click", reveal_password);

function reveal_password() {
  if (password_input.type != "text") {
    password_input.type = "text";
  } else password_input.type = "password";
}
