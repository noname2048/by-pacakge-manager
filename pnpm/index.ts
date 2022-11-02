import moment from "moment";

const button = document.querySelector("#oh");
button?.addEventListener("click", () => {
  console.log(moment.utc());
});
