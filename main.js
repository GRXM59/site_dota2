const buttons = document.querySelectorAll(".button");
const logo_link = document.querySelectorAll(".logo_link");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href =
      "https://grxm59.github.io/site_dota2/";
  });
});

logo_link.forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = "https://grxm59.github.io/site_dota2/page/heros.html";
  });
});
