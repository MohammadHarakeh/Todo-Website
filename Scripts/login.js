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

  if (userInput.length == 0) {
    alert("Please enter a task");
    return;
  }

  const addedDiv = document.getElementById("todoList");
  const outerWrapper = document.createElement("div");
  outerWrapper.id = addedDiv.children.length;

  const content = document.createElement("p");
  content.innerText = userInput;
  const trashIcon = document.createElement("i");

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.addEventListener("click", function () {
    deleteItem(outerWrapper.id);
  });

  outerWrapper.appendChild(content);
  outerWrapper.appendChild(trashIcon);
  addedDiv.appendChild(outerWrapper);

  content.style.backgroundColor = "#00abe4";
  content.style.width = "100%";
  content.style.height = "80%";

  outerWrapper.style.display = "flex";
  outerWrapper.style.maxWidth = "100%";
  outerWrapper.style.height = "4vh";

  trashIcon.style.position = "absolute";
  trashIcon.style.right = "12%";
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
