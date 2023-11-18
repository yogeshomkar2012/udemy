const accesskey = "h3ednKyWERFjx9ba9VyKTXh-ZMAvce-IhA7EsHPoE2c";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 0;
async function searchImages() {
  let inputData = searchInputEl.value;
  //   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }
  const results = data.results;
  results.map((result, i) => {
    searchResultsEl.innerHTML += `<div class="search-result" ${i}>
      <img
        src="${result.urls.small}"
        alt="${result.alt_description}"
      />
      <a
        href="${result.links.html}"
        target="_blank"
        rel="noopener noreferrer"
        >${result.alt_description}</a
      >
    </div>`;
    // const imageWrapper = document.createElement("div");
    // imageWrapper.classList.add("search-result");
    // const image = document.createElement("img");
    // image.src = result.urls.small;
    // image.alt = result.alt_description;
    // const imageLink = document.createElement("a");
    // imageLink.href = result.links.html;
    // imageLink.target = "_blank";
    // imageLink.textContent = result.alt_description;

    // imageWrapper.appendChild(image);
    // imageWrapper.appendChild(imageLink);
    // searchResultsEl.appendChild(imageWrapper);
  });
  page++;
  if (page > 1) {
    showMoreButtonEl.style.display = "block";
  }
}
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  page = 1;
  searchImages();
});
showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
