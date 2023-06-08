const email = document.getElementById("correo");
const btn = document.getElementById("btn");
const parrafo = document.getElementById("parrafo");

function print() {
  const correo = localStorage.getItem("correo");
  parrafo.innerHTML = correo;
}

function saveEmail(e) {
  e.preventDefault();
  console.log(email.value);
  localStorage.setItem("correo", email.value);
  print();
}

print();
btn.addEventListener("click", saveEmail);

//*Formulario nota

const form = document.getElementById("form-nota");
const title = document.getElementById("titulo");
const content = document.getElementById("contenido");
const pNote = document.getElementById("parrafo-nota");
const msgError = document.querySelector(".msgError");

function printNote() {
  const note = JSON.parse(localStorage.getItem("note"));
  //no poner note directamente, hay que pintar los valores del objeto
  if (note) {
    pNote.innerHTML = `<p>Titulo: ${note.title}</p> <p>Contenido:${note.content}</p>`;
  }
}

function createNote(e) {
  e.preventDefault();
  const note = {
    title: title.value,
    content: content.value,
  };
  if (title.value == "" || content.value == "") {
    msgError.innerHTML = "rellena todos los campos";
  } else {
    localStorage.setItem("note", JSON.stringify(note));
    printNote();
    msgError.innerHTML = "";
  }
}

printNote();
form.addEventListener("submit", createNote);

//*PINTAR EN EL DOM

const personas = [
  {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  },
  {
    nombre: "María",
    edad: 30,
    ciudad: "Barcelona",
  },
  {
    nombre: "Euralio",
    edad: 40,
    ciudad: "Sevilla",
  },
  {
    nombre: "Laura",
    edad: 35,
    ciudad: "Valencia",
  },
];

//  pintar en el DOM a Euralio
const pEuralio = document.querySelector("#parrafo-euralio");
const personasDiv = document.querySelector(".personas");
console.log(personas[2]);
pEuralio.innerHTML = `<p>${personas[2].nombre}</p> <p>${personas[2].edad}</p> <p>${personas[2].ciudad}</p>`;

// for (const persona of personas) {
//     personasDiv.innerHTML += `<p>${persona.nombre}</p> <p>${persona.edad}</p>`
// }

for (const persona of personas) {
  if (persona.edad > 30) {
    personasDiv.innerHTML += `<p>${persona.nombre}</p> <p>${persona.edad}</p> <p>${persona.ciudad}</p>`;
  }
}
