function changeName() {
  let name = prompt("Type your name here!", "");
  document.getElementById("opening").innerHTML = name;
}

let change = document.getElementById("yes");
yes.addEventListener("click", function () {
  changeName();
});

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
var form = document.getElementById("messageForm");
function validation(e) {
  e.preventDefault();
  let inputName = document.getElementById("name-input").value;
  let inputBirthday = document.getElementById("date").value;
  let inputGender = document.getElementById("Male").checked
    ? "Male"
    : document.getElementById("Female").checked
    ? "Female"
    : "";
  let inputMessage = document.getElementById("msg-area").value;
  // let inputGender = "";
  // let inputMale = document.getElementById("Male").checked;
  // let inputFemale = document.getElementById("Female").checked;
  // if (inputMale === true) {
  //   inputGender = Male;
  // } else if (inputFemale === true) {
  //   inputGender = Female;
  // }
  console.log("gender", inputGender);
  if (
    inputName !== "" &&
    inputBirthday !== "" &&
    inputGender !== "" &&
    inputMessage !== ""
  ) {
    document.getElementById("name").innerHTML = inputName;
    document.getElementById("bday").innerHTML = inputBirthday;
    document.getElementById("gender").innerHTML = inputGender;
    document.getElementById("msg").innerHTML = inputMessage;
    return;
  }
  return alert("Some Field are Empty!");

  console.log("date", inputBirthday);
  // if (inputBirthday === "") {
  //   alert("Some field are empty");
  // } else {
  //   console.log(inputBirthday);
  // }
}
form.addEventListener("submit", validation);
/*
setInterval(() => {
  plusDivs(1);
}, 1000);
*/

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
