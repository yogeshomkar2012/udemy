const header = document.querySelector("#header");
const headerCurrentPosition = header.offsetTop;

window.addEventListener("scroll", () => {
  const claslist = header.classList;
  window.scrollY > headerCurrentPosition
    ? claslist.add("sticky")
    : claslist.remove("sticky");
});
console.log(headerCurrentPosition);
