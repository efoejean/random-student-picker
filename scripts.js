const myForm = document.querySelector("form");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hello submit");
});
