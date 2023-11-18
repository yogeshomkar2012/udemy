const tabs = document.querySelectorAll(".tab-section");
const content = document.querySelectorAll(".content-section");

tabs.forEach((tab) => {
  tab.addEventListener("mouseover", () => {
    content.forEach((content) => {
      content.classList.remove("active");
    });
    const contentid = tab.getAttribute("data-id");
    document.querySelector(`#${contentid}`).classList.add("active");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
