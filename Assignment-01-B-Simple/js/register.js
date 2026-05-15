const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

function getUsers() {
  return JSON.parse(localStorage.getItem("registeredUsers")) || [];
}

function saveUsers(users) {
  localStorage.setItem("registeredUsers", JSON.stringify(users));
}

function addUserToLocalStorage(user) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    city: document.getElementById("city").value,
    password: document.getElementById("password").value
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = function () {
    if (xhr.status === 201) {
      addUserToLocalStorage(user);
      message.innerHTML = '<div class="alert alert-success">User registered successfully.</div>';
      form.reset();
      window.location.href = "users.html";
    } else {
      message.innerHTML = '<div class="alert alert-danger">AJAX POST failed.</div>';
    }
  };

  xhr.onerror = function () {
    addUserToLocalStorage(user);
    window.location.href = "users.html";
  };

  xhr.send(JSON.stringify(user));
});
