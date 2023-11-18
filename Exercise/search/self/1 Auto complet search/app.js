let availableKeywords = [
  "HTML",
  "CSS",
  "Easy Tutorial",
  "react Js",
  "javascript",
  "web developing",
];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.addEventListener("keyup", function () {
  let input = inputBox.value.toLowerCase();
  let result = availableKeywords.filter((keyword) => keyword.toLowerCase().includes(input));
  display(result);
  resultsBox.innerText = result.length ? "" : "search not found";
});

function display(result) {
  const content = result.map((keyword) => `<li onclick="selectInput(this)">${keyword}</li>`);
  resultsBox.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
}

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}
function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
}
