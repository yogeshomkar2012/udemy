// variable declaration
const sActive = document.querySelector("#s-active-btn");
const s_active_el = document.querySelector(".s-active");
const lActive = document.querySelector("#l-active-btn");
const l_active_el = document.querySelector(".l-active");
const signUP_btn = document.querySelector(".signup-btn");
// Active singUp and signIn hide and show

sActive.addEventListener("click", function () {
  s_active_el.style.opacity = "0";
  s_active_el.classList =
    "active-box s-active animate__animated animate__fadeOutUp";
  l_active_el.style.opacity = "1";
  l_active_el.style.zIndex = "1";
  l_active_el.classList =
    "active-box l-active animate__animated animate__fadeInDown";
});
lActive.addEventListener("click", function () {
  l_active_el.style.opacity = "0";
  l_active_el.classList =
    "active-box s-active animate__animated animate__fadeOutUp";
  s_active_el.style.opacity = "1";
  s_active_el.style.zIndex = "1";
  s_active_el.classList =
    "active-box l-active animate__animated animate__fadeInDown";
});

// signup
const signup_btn = document.querySelector("#signup-btn");
const f_name = document.querySelector("#f-name");
const l_name = document.querySelector("#l-name");
const s_username = document.querySelector("#s-username");
const s_password = document.querySelector("#s-password");
const s_notice = document.querySelector("#s-notice");
signUP_btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    f_name.value != "" &&
    l_name.value != "" &&
    s_username.value != "" &&
    s_password.value != ""
  ) {
    if (localStorage.getItem(s_username.value) == null) {
      let userData = {
        f_name: f_name.value,
        l_name: l_name.value,
        s_username: s_username.value,
        s_password: s_password.value,
      };
      const s_string = JSON.stringify(userData);
      localStorage.setItem(s_username.value, s_string);
      s_notice.innerHTML = `Sign Up Success <i class="fa-solid fa-check"></i>`;
      s_notice.style.color = "green";
      setTimeout(() => {
        s_notice.innerHTML = "";
      }, 3000);
      s_username.value = "";
      f_name.value = "";
      l_name.value = "";
      s_password.value = "";
    } else {
      s_notice.innerHTML = "User Name Is Already Exist";
      s_notice.style.color = "red";

      setTimeout(() => {
        s_notice.innerHTML = "";
      }, 3000);
    }
  } else {
    s_notice.textContent = "Please Fill All Fields";
    s_notice.style.color = "red";
    setTimeout(() => {
      s_notice.textContent = "";
    }, 3000);
  }
});
//  login
const login_btn = document.querySelector("#login-btn");
const username_el = document.querySelector("#UserName");
const password_el = document.querySelector("#password");
const l_notice = document.querySelector("#l-notice");

login_btn.addEventListener("click", function (e) {
  e.preventDefault();
  const userNameValue = username_el.value;
  const passwordValue = password_el.value;
  if (userNameValue != "" && passwordValue != "") {
    if (localStorage.getItem(userNameValue) != null) {
      const data = localStorage.getItem(userNameValue);
      const l_obj = JSON.parse(data);
      const password = l_obj.s_password;
      if (passwordValue == password) {
        window.location = "contact/contact.html";
        sessionStorage.setItem("username", userNameValue);
      } else {
        l_notice.innerHTML = "Password Not Match";
        l_notice.style.color = "red";
        setTimeout(() => {
          l_notice.innerHTML = "";
        }, 3000);
      }
    } else {
      l_notice.innerHTML = "User Name Not Found";
      l_notice.style.color = "red";
      setTimeout(() => {
        l_notice.innerHTML = "";
      }, 3000);
    }
  } else {
    l_notice.innerHTML = `User Name And Password Are Required <i class="fa-solid fa-xmark "></i>`;
    l_notice.style.color = "red";
    l_notice.classList.add = "animate__animated animate__bounce";
    setTimeout(() => {
      l_notice.innerHTML = "";
    }, 3000);
  }
});
//  login
