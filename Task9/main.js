fetch("https://api.ipify.org/")
  .then((response) => response.text())
  .then((ip) => {
    console.log(ip);
    document.getElementById("IP").innerHTML = "<p>" + ip + "</p>";
  })
  .catch((error) => console.error("Error:", error));
