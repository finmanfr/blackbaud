document.addEventListener("DOMContentLoaded", function () {
  const x = document.getElementById("x");

  document.addEventListener("keydown", function (event) {
    if (event.key === "6" || event.key === "7") {
      x.style.display = "none";
    }
  });
});
