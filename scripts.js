//

const myForm = document.querySelector("form");
const p = document.querySelector("p");
const students = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudents = Object.fromEntries(new FormData(event.target));

  students.push(newStudents);
});

document.querySelector(".button-jumbo").addEventListener("click", () => {
  // get the random student object
  const randomNum = getRandomIntInclusive(0, students.length - 1);

  const randomName = students[randomNum];

  p.innerText = `${randomName.firstName}  ${randomName.lastName}`;
});
