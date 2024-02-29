function login() {
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  const correctUsername = "AdminSEF123";
  const correctPassword = "SeF@ctORy$$456";

  if (
    enteredUsername == correctUsername &&
    enteredPassword == correctPassword
  ) {
    window.location.href = "todo.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
