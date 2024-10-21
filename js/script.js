/*
function replaceName() {
  let opening = prompt("Hello, what's your name?", "");
  document.getElementById("opening").innerHTML = opening;
}

let change = document.getElementById("change");
change.addEventListener("click", function () {
  replaceName();
});
*/

/*
let nameInput = document.getElementById("name");

document.getElementById("submit").addEventListener("click", function () {
  const nama = nameInput.value;

  if (name === "") {
    document.getElementById("error-mes").innerHTML = "Name cannot be empty";
  } else {
    document.getElementById("opening").innerHTML = nama;
  }
});
*/

/*
function validateForm() {
  const nama = document.forms["test"]["name-input"].value;

  if (nama === "") {
    document.getElementById("error-mes").innerHTML = "cannot be empty!";
    return false;
  }

  setName(nama);

  return false;
}

function setName(name) {
  document.getElementById("opening").innerHTML = name;
  document.getElementById("error-mes").innerHTML = "";
}
*/

function changeName() {
  let name = prompt("Type your name here!", "");
  document.getElementById("opening").innerHTML = name;
}

let change = document.getElementById("yes");
yes.addEventListener("click", function () {
  changeName();
});
