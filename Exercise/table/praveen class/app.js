const body = document.body;
const people = [
  {
    fname: "yogesh",
    lname: "hv",
    age: 38,
    gender: "male",
    city: "halaguru",
    salary: 30000,
    address: "halaguru ramandiraSreet",
  },
  {
    fname: "jeevan",
    lname: "kumar",
    age: 22,
    gender: "male",
    city: "arakere",
    salary: 30000,
    address: "halaguru ramandiraSreet",
  },
  {
    fname: "jeevan",
    lname: "kumar",
    age: 22,
    gender: "male",
    city: "arakere",
    salary: 30000,
    address: "halaguru ramandiraSreet",
  },
  {
    fname: "jeevan",
    lname: "kumar",
    age: 22,
    gender: "male",
    city: "arakere",
    salary: 30000,
    address: "halaguru ramandiraSreet",
  },
  {
    fname: "jeevan",
    lname: "kumar",
    age: 22,
    gender: "male",
    city: "arakere",
    salary: 30000,
    address: "halaguru ramandiraSreet",
  },
];

let table = document.createElement("table");
let thead = document.createElement("tr");

let th1 = document.createElement("th");
th1.innerText = "fname";
let th2 = document.createElement("th");
th2.innerText = "lname";
let th3 = document.createElement("th");
th3.innerText = "Age";
let th4 = document.createElement("th");
th4.innerText = "gender";
let th5 = document.createElement("th");
th5.innerText = "city";
let th6 = document.createElement("th");
th6.innerText = "address";
let th7 = document.createElement("th");
th7.innerText = "salary";
thead.appendChild(th1);
thead.appendChild(th2);
thead.appendChild(th3);
thead.appendChild(th4);
thead.appendChild(th5);
thead.appendChild(th6);
thead.appendChild(th7);

table.appendChild(thead);

people.forEach((ele) => {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = ele.fname;
  let td2 = document.createElement("td");
  td2.innerText = ele.lname;
  let td3 = document.createElement("td");
  td3.innerText = ele.age;
  let td4 = document.createElement("td");
  td4.innerText = ele.gender;
  let td5 = document.createElement("td");
  td5.innerText = ele.city;
  let td6 = document.createElement("td");
  td6.innerText = ele.address;
  let td7 = document.createElement("td");
  td7.innerText = ele.salary;
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  table.appendChild(trow);
});
body.appendChild(table);
