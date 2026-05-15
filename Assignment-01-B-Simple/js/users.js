const tableBody = document.getElementById("userTableBody");
const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

if (users.length === 0) {
  tableBody.innerHTML = '<tr><td colspan="5" class="text-center">No users registered yet.</td></tr>';
} else {
  users.forEach(function (user, index) {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.city}</td>
      </tr>
    `;
  });
}
