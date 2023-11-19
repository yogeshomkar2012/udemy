const day = "saturday";

switch (day) {
  case "monday":
    console.log("monday");
    break;
  case "tusday":
    console.log("tusday");
    break;
  case "wednesday":
    console.log("wednesday");
    break;
  case "thusday":
    console.log("thusday");
    break;
  case "friday":
    console.log("friday");
    break;
  case "saturday":
    console.log("saturday");
    break;
  case "sunday":
    console.log("sunday");
    break;
  default:
    console.log("not a proper day");
}
switch (day) {
  case "monday":
    console.log("weak day monday");
    break;
  case "tusday":
    console.log("weak day tusday");
    break;
  case "wednesday":
    console.log("weak day wednesday");
    break;
  case "thusday":
    console.log("weak day thusday");
    break;
  case "friday":
    console.log("weak day friday");
    break;
  case "saturday":
  case "sunday":
    console.log("week end day ");
    break;
  default:
    console.log("not a proper day");
}
