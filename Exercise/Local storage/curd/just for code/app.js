"strict";
const addBtn = document.querySelector("#add-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-icon");
const registerBtn = document.querySelector("#register-btn");
const updateBtn = document.querySelector("#update-btn");
const fnameEl = document.querySelector("#fname");
const lnameEl = document.querySelector("#lname");
const jobTitleEl = document.querySelector("#job-title");
const userImg = document.querySelector("#user-img");
const registerForm = document.querySelector("#register-form");
const profile_pic = document.querySelector("#profile-pic");
const uploadPic = document.querySelector("#upload-field");
let allInput = registerForm.querySelectorAll("input");
let userData = [];
let imgUrl;
const tableData = document.querySelector("#table-data");

// show modal
addBtn.addEventListener("click", function () {
  modal.classList.add("active");
});
// hide modal
closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  for (let i = 0; i < allInput.length; i++) {
    allInput[i].value = "";
  }
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  registrationData();
  getDataFromLocal();
  registerForm.reset();
  closeBtn.click();
});
if (localStorage.getItem("userData") != null) {
  userData = JSON.parse(localStorage.getItem("userData"));
}

function registrationData() {
  userData.push({
    firstName: fnameEl.value,
    lastName: lnameEl.value,
    jobTitle: jobTitleEl.value,
    // profilePic: "images/avatar.png",
    profilePic: imgUrl == undefined ? "images/avatar.png" : imgUrl,
  });
  const userString = JSON.stringify(userData);
  localStorage.setItem("userData", userString);
  swal("You saved!", "You clicked the button!", "success");
}
// display data to ui
const getDataFromLocal = () => {
  tableData.innerHTML = "";
  userData.forEach((e, i) => {
    tableData.innerHTML += `<tr index="${i}">
    <td>${i + 1}</td>
    <td><img src="${e.profilePic}" height="30"  width="40"/></td>
    <td>${e.firstName}</td>
    <td>${e.lastName}</td>
    <td>${e.jobTitle}</td>
    <td>
      <button class="edit-btn"><i class="fa-solid fa-edit"></i></button>
      <button class="del-btn">
        <i class="fa-solid fa-trash" style="color: red"></i>
      </button>
    </td>
  </tr>`;
  });
  // delete
  const allDelBtn = document.querySelectorAll(".del-btn");
  var i;
  for (i = 0; i < allDelBtn.length; i++) {
    allDelBtn[i].addEventListener("click", function () {
      let tr = this.parentElement.parentElement;
      const id = tr.getAttribute("index");
      userData.splice(id, 1);
      // sweet Alert
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          localStorage.setItem("userData", JSON.stringify(userData));
          tr.remove();
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
      // sweet Alert
    });
  }
  // delete
  // edit
  var allEdit = document.querySelectorAll(".edit-btn");
  for (i = 0; i < allEdit.length; i++) {
    allEdit[i].addEventListener("click", function () {
      const tr = this.parentElement.parentElement;
      const td = tr.querySelectorAll("td");
      const index = tr.getAttribute("index");
      const imgTag = td[1].getElementsByTagName("img");
      const profilePic = imgTag[0].src;
      const fname = td[2].innerHTML;
      const lname = td[3].innerHTML;
      const jobTitle = td[4].innerHTML;
      addBtn.click();
      registerBtn.disabled = true;
      updateBtn.disabled = false;
      fnameEl.value = fname;
      lnameEl.value = lname;
      jobTitleEl.value = jobTitle;
      profile_pic.src = profilePic;
      updateBtn.addEventListener("click", function (e) {
        // e.preventDefault();
        userData[index] = {
          firstName: fnameEl.value,
          lastName: lnameEl.value,
          jobTitle: jobTitleEl.value,
          profilePic: uploadPic.value == "" ? profile_pic.src : imgUrl,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
      });
    });
  }
  // edit
};
getDataFromLocal();

//  image processing

uploadPic.addEventListener("change", function () {
  if (uploadPic.files[0].size < 1000000) {
    let freader = new FileReader();

    freader.addEventListener("load", function (e) {
      imgUrl = e.target.result;
      profile_pic.src = imgUrl;
    });
    freader.readAsDataURL(uploadPic.files[0]);
  } else {
    alert("File Size Is To Long");
  }
});
