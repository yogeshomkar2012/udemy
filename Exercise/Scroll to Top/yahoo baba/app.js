const scrollBtn = document.querySelector("#scroll-to-top");

window.addEventListener("scroll", function () {
  let pageoffset = window.pageYOffset;
  if (pageoffset > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
