// logout
const welcome_el = document.querySelector("#welcome");
const username = sessionStorage.getItem("username");
const logOut_btn = document.querySelector("#logout-btn");
if (username == null) {
  document.body.innerHTML = `<h1> Illigal Action Perform</h1>`;
  document.body.classList.add("illigal");
}
logOut_btn.addEventListener("click", function () {
  window.location = "../index.html";
  sessionStorage.removeItem("username");
});

const user_data = JSON.parse(localStorage.getItem(username));
welcome_el.textContent = `Welcome Mr / Mrs  ${user_data.f_name} ${user_data.l_name}`;

// contact list
const create_btn = document.querySelector(".create-btn");
const update_btn = document.querySelector(".update-btn");
const contact_details = document.querySelector(".contact-details");
const input_name = document.querySelector(".name");
const input_number = document.querySelector(".number");
const create_form = document.querySelector("#create-form-notice");

create_btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input_name.value != "" && input_number.value != "") {
    newContactApp();
    updateLocalStorage();
    input_name.focus();
  } else {
    create_form.innerHTML = `All Input Fields Must Required <i class="fa-solid fa-xmark "></i>`;
    create_form.style.color = "red";
    setTimeout(() => {
      create_form.innerText = "";
    }, 3000);
  }
});
let array_list = [];
if (localStorage.getItem(username + "_list") != null) {
  array_list = JSON.parse(localStorage.getItem(username + "_list"));
  array_list.forEach((task) => {
    newContactApp(task);
  });
}

function newContactApp(task) {
  let name = input_name.value;
  let contact = input_number.value;
  if (task) {
    name = task.co_name;
    contact = task.co_number;
  }
  let i;
  let accordion = document.createElement("div");
  accordion.classList = "accordion mb-2";
  let all_accordions = contact_details.getElementsByClassName("accordion");

  for (i = 0; i < all_accordions.length; i++) {}
  let accordion_item = document.createElement("div");
  accordion_item.classList = "accordion-item";
  accordion.append(accordion_item);

  let accordion_header = document.createElement("h5");
  accordion_header.classList = "accordion-header";
  accordion_item.append(accordion_header);

  let button = document.createElement("button");
  button.classList = "accordion-button";
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", "#collapse-" + i);
  button.innerText = name;
  accordion_header.append(button);

  let accordion_collapse = document.createElement("div");
  accordion_collapse.setAttribute("id", "collapse-" + i);
  accordion_collapse.classList = "accordion-collapse collapse";
  accordion_item.append(accordion_collapse);

  let accordion_body = document.createElement("div");
  accordion_body.classList = "accordion-body";
  accordion_collapse.append(accordion_body);

  let row = document.createElement("div");
  row.classList = "row";
  accordion_body.append(row);

  let col_one = document.createElement("div");
  col_one.classList = "col-md-6";
  row.append(col_one);

  let h5 = document.createElement("h5");
  h5.innerHTML = name;
  h5.setAttribute("id", "collapse-" + i);
  col_one.append(h5);

  let p = document.createElement("p");
  p.innerHTML = contact;
  col_one.append(p);

  let col_two = document.createElement("div");
  col_two.classList =
    "col-md-6 d-flex justify-content-between align-items-center";
  col_two.innerHTML = `<i class="fa-regular fa-message"></i><i class="fa fa-phone"></i><i class="fa fa-ellipsis-vertical opt-btn"></i>`;
  row.append(col_two);

  let option_box = document.createElement("div");
  option_box.classList = "option-box";
  option_box.innerHTML = `<i class="fa fa-trash"></i><i class="fa fa-edit"></i>`;
  col_two.append(option_box);

  contact_details.append(accordion);
  input_name.value = "";
  input_number.value = "";
  const i_tag = option_box.getElementsByTagName("i");
  // edit
  i_tag[1].onclick = function () {
    let parent = this.parentElement.parentElement.parentElement;
    let h5 = parent.getElementsByTagName("h5");
    let p = parent.getElementsByTagName("p");
    let edited_name = h5[0].innerHTML;
    let edited_con = p[0].innerHTML;
    input_number.value = edited_con;
    input_name.value = edited_name;
    input_name.focus();
    update_btn.classList.remove("display");
    create_btn.classList.add("display");
    update_btn.onclick = function () {
      let id = h5[0].getAttribute("id").replace("collapse-", "");
      let co_name = input_name.value;
      let co_number = input_number.value;
      updateLocalStorage(co_name, co_number, id);
    };
  };
  // delete

  i_tag[0].addEventListener("click", function () {
    let cnf = window.confirm("Do Youe Want Delete");
    if (cnf) {
      accordion.remove();
      updateLocalStorage();
    }
  });
  // options
  let opt_btn = document.querySelectorAll(".opt-btn");
  for (let j = 0; j < opt_btn.length; j++) {
    opt_btn[j].onclick = function () {
      let parent = this.parentElement;
      let op_box = parent.querySelector(".option-box");
      op_box.classList.toggle("active");
    };
  }
}

function updateLocalStorage(name, number, id) {
  if (name != "" && number != "") {
    array_list[id] = {
      co_name: name,
      co_number: number,
    };
    console.log(array_list[id]);
  } else {
    array_list = [];
    const accordion_el = contact_details.querySelectorAll(".accordion");
    for (i = 0; i < accordion_el.length; i++) {
      const h5 = accordion_el[i].getElementsByTagName("h5");
      const p = accordion_el[i].getElementsByTagName("p");
      array_list.push({
        co_name: h5[1].textContent,
        co_number: p[0].textContent,
      });
    }
  }
  localStorage.setItem(username + "_list", JSON.stringify(array_list));
}

// search function
let search = document.querySelector("#userSearch");
search.addEventListener("keyup", function () {
  const accordion = contact_details.querySelectorAll(".accordion");
  const input = this.value;
  const filter = input.toUpperCase();
  accordion.forEach((e, i) => {
    const btn = accordion[i].querySelector(".accordion-button").innerHTML;
    const textValue = btn;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      accordion[i].style.display = "";
    } else {
      accordion[i].style.display = "none";
    }
  });
});
