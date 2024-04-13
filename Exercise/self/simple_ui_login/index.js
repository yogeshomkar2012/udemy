'use strict';
const account1 = {
  username: 'Yogesh kumar',
  contact: 9844944689,
};
const account2 = {
  username: 'jeeva kumar',
  contact: 9844944683,
};
const accounts = [account1, account2];
// const accounts = [
//   {
//     username: 'yogesh kumar',
//     contact: 9844944689,
//   },
//   {
//     username: 'jeeva kumar',
//     contact: 9844944683,
//   },
// ];

const tbody = document.querySelector('#table-body');
const btnLogin = document.querySelector('.login_button');
const userInput = document.querySelector('.user_input');
///////////////////////////////////////////////////
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  accounts.find((acc) => {
    acc.fname.toLocaleLowerCase() === userInput.value
  })
  console.log(userInput.value)
});

const createfname = accs => {
  accs.forEach(acc => (acc.fname = acc.username.split(' ')[0]));
};
createfname(accounts);

const createlname = accs => {
  accs.forEach(acc => (acc.lname = acc.username.split(' ')[1]));
};
createlname(accounts);

const displayUserList = function (accs) {
  tbody.innerHTML = '';
  accs.forEach((acc, i) => {
    const firstName = acc.username.split(' ')[0].toLocaleLowerCase();
    console.log(firstName);
    const lastName = acc.username.split(' ')[1];
    const html = ` <tr >
  <th scope="row">1</th>
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${acc.username.toLocaleLowerCase()}</td>
  <td>Active</td>
  <td>
  <button>Edit</button>
  <button>Delete</button>
  </td>
</tr>`;
    tbody.insertAdjacentHTML('afterbegin', html);
  });
};
displayUserList(accounts);
console.log(accounts);
