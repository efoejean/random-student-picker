const myForm = document.querySelector("form");
const students = [];

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudents = Object.fromEntries(new FormData(event.target));

  students.push(newStudents);
});
