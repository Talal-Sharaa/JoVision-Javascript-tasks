function showTime() {
  let time = new Date();
  let hours = time.getHours().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let seconds = time.getSeconds().toString().padStart(2, "0");
  document.getElementById("clock").innerHTML =
    "<p>" + hours + ":" + minutes + ":" + seconds + "</p>";
}

setInterval(showTime, 1000);
