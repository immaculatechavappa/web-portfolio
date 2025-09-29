document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector("button.start");
  if (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});
