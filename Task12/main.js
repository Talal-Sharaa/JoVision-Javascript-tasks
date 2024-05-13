document.getElementById("submit").addEventListener("click", createUser);

function createUser() {
  const time = new Date();
  const user = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    timestamp: time,
  };

  const userInfo = `
    Your name is: ${user.name} <br>
    Your Age is: ${user.age} <br>
    ${user.timestamp}
  `;
  alert(userInfo);
}
