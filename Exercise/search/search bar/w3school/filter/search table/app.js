const myInput = document.getElementById("myInput");
myInput.addEventListener("keyup", function myFunction() {
  const filter = myInput.value.toUpperCase();
  const rows = document.querySelectorAll("#myTable tr");

  rows.forEach((row) => {
    const cell = row.querySelector("td:first-child");
    if (cell) {
      const txtValue = cell.textContent || cell.innerText;
      row.style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
    }
  });
});
