const input = document.getElementById("myInput");
input.addEventListener("keyup", function () {
  const filter = input.value.toUpperCase();
  const li = document.querySelectorAll("#myUL li");

  li.forEach((item) => {
    const a = item.querySelector("a");
    const textValue = a.textContent || a.innerText;
    item.style.display = textValue.toUpperCase().includes(filter) ? "" : "none";
  });
});
