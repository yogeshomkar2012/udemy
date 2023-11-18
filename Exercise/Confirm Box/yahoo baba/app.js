function showConfirm(message, cf) {
  // overLaay(confirm Box)
  let confirmBox = document.createElement("div");
  confirmBox.classList.add("confirm-box");

  //messag Div
  let messageBox = document.createElement("div");
  messageBox.classList.add("message-box");
  messageBox.textContent = message;
  confirmBox.appendChild(messageBox);

  // Button Div
  let buttonBox = document.createElement("div");
  buttonBox.classList.add("button-box");
  messageBox.appendChild(buttonBox);

  // yes Button
  let yesButton = document.createElement("button");
  yesButton.classList.add("yes-button");
  yesButton.textContent = "Yes";
  buttonBox.appendChild(yesButton);
  yesButton.addEventListener("click", () => {
    cf(true);
  });

  //no Button
  let noButton = document.createElement("button");
  noButton.classList.add("no-button");
  noButton.textContent = "No";
  buttonBox.appendChild(noButton);
  noButton.addEventListener("click", () => {
    cf(false);
  });

  document.body.appendChild(confirmBox);
}

document.querySelector("#openConfirmBox").addEventListener("click", () => {
  showConfirm("are you 18 years Old ?", function (result) {
    result ? console.log("Yes") : console.log("no");
  });
});
