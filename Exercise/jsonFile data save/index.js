function Func() {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    }).then((result) => {
        localStorage.setItem(result[0],result.users)
        console.log(result.users)
    })
}
const data = Func();
// import data from './data.json';
// console.log(data)
