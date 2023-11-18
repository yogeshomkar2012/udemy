const savbBtn = document.querySelector("#saveBtn");
const userForm = document.querySelector("#userForm");
let userDetailes = [];
savbBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const userFName = document.querySelector("#fname").value;
  const userLName = document.querySelector("#fname").value;
  let userDetailesObj = {
    userFirstName: userFName,
    userLastname: userLName,
  };

  JSON.stringify(userDetailes.push(userDetailesObj));
  localStorage.setItem("userDetailes", userDetailes);
  userForm.reset();
});

console.log(userDetailes);
