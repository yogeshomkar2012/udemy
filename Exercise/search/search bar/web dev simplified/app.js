const userCardTemplate = document.querySelector("[data-user-templete]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const dataSearch = document.querySelector("[data-search]");
let user = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    user = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");

      header.textContent = user.name;
      body.textContent = user.email;

      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  });

dataSearch.addEventListener("input", (e) => {
  const value = e.target.value.toUpperCase();
  user.forEach((users) => {
    const isVisible =
      users.name.toUpperCase().includes(value) ||
      users.email.toUpperCase().includes(value);
    users.element.classList.toggle("hide", !isVisible);
  });
});
