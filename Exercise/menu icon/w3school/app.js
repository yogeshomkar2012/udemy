const container = document.querySelector(".container");
container.addEventListener("click", function () {
  this.classList.toggle("change");
  console.log("clicked");
});
