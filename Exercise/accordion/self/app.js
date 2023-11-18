"strict";
const input = document.querySelector("input");
const sectionItems = document.querySelectorAll(".section-items");

sectionItems.forEach((items) => {
  const title = items.querySelector(".section-title");
  title.addEventListener("click", () => {
    sectionItems.forEach((item) => {
      if (item !== items) {
        item.classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    });
  });
});

input.addEventListener("click", () => {
  sectionItems.forEach((item) => {
    if (!item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
});
