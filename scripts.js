//

const myForm = document.querySelector("form");
const students = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudents = Object.fromEntries(new FormData(event.target));

  students.push(newStudents);
});
