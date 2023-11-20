const user = {
  fname: "Yogesh",
  lname: "hv",
  birthYear: 1984,
  job: "teacher",
  friends: ["kamala", "vimala", "chandra"],
  dl: true,
  calcAge: function () {
    this.crentYear = new Date().getFullYear();
    return this.crentYear - this.birthYear;
  },
  getSummary: function () {
    return `${this.fname}  is a ${this.calcAge()}-year old and he has ${
      this.dl === true ? "a" : "no"
    } driving lisence`;
  },
};

console.log(user.getSummary());
