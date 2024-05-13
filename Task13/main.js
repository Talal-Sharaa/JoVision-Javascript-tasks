document.getElementById("submit").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  fetch(`https://api.agify.io/?name=${name}`)
    .then((response) => response.json())
    .then(({ name, age }) => {
      alert(`Your name is: ${name}\nYour age is: ${age}`);
    })
    .catch((error) => console.error("Error:", error));
});
