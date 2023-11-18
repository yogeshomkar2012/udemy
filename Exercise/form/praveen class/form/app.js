const firstName = document.querySelector("#fn");
const lastName = document.querySelector("#ln");
const dateOfBirth = document.querySelector("#dob");
const Gmale = document.getElementsByName("male");
const table = document.querySelector(".list");
// console.log(Gmale);

const button = document.querySelector(".add");
let people = [];
function createTable(Array) {
  table.innerHTML = "";
  let thead = document.createElement("tr");

  let th1 = document.createElement("th");
  th1.innerText = "First Name";
  let th2 = document.createElement("th");
  th2.innerText = "Last name";
  let th3 = document.createElement("th");
  th3.innerText = "Date Of Birth";
  let th4 = document.createElement("th");
  th4.innerText = "Gender";
  let th5 = document.createElement("th");
  th5.innerText = "Language";
  let th6 = document.createElement("th");
  th6.innerText = "Course";
  let th7 = document.createElement("th");
  th7.innerText = "Address";
  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);
  thead.appendChild(th4);
  thead.appendChild(th5);
  thead.appendChild(th6);
  thead.appendChild(th7);

  table.appendChild(thead);
  Array.forEach((ele) => {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = ele.firstName;
    let td2 = document.createElement("td");
    td2.innerText = ele.lastName;
    let td3 = document.createElement("td");
    td3.innerText = ele.dob;
    let td4 = document.createElement("td");
    td4.innerText = ele.gender;
    let td5 = document.createElement("td");
    td5.innerText = ele.languages;
    let td6 = document.createElement("td");
    td6.innerText = ele.course;
    let td7 = document.createElement("td");
    td7.innerText = ele.address;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    table.appendChild(trow);
  });
  table.appendChild(list);
}

button.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();
  const userForm = document.userForm;
  let person = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    languages: [],
    course: "",
    address: "",
  };
  person.firstName = userForm.fn.value;
  person.lastName = userForm.ln.value;
  person.dob = userForm.dob.value;
  person.gender = userForm.gender.value;

  userForm.languages.forEach((langs) => {
    if (langs.checked === true) {
      person.languages.push(langs.value);
    }
  });
  person.course = userForm.course.value;
  person.address = userForm.address.value;
  people.push(person);
  userForm.reset();
  createTable(people);
});
