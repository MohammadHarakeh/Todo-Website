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

function addToDo() {
  const userInput = document.getElementById("todoInput").value;

  if (userInput.length > 30) {
    alert("You have exceeded the number of letters allowed");
    return;
  }

  const addedDiv = document.getElementById("todoList");
  const outerWrapper = document.createElement("div");
  outerWrapper.id = addedDiv.children.length;

  const content = document.createElement("p");
  const trashIcon = document.createElement("i");

  content.innerText = userInput;

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.addEventListener("click", function () {
    deleteItem(outerWrapper.id);
  });

  outerWrapper.appendChild(content);
  outerWrapper.appendChild(trashIcon);
  addedDiv.appendChild(outerWrapper);

  outerWrapper.style.display = "flex";
  outerWrapper.style.maxWidth = "100%";

  content.style.flex = "1";
  content.style.float = "right";

  trashIcon.style.fontSize = "20px";
  trashIcon.style.cursor = "pointer";

  document.getElementById("todoInput").value = "";
}

function deleteItem(id) {
  const toDelete = document.getElementById(id);
  if (toDelete) {
    toDelete.remove();
  }
}
