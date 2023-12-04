const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const formulario = document.getElementById("form");

formulario.addEventListener("submit", e=>{
  let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(nombre.nodeValue.length < 4){
    alert("Nombre muy corto");
  }
  if(!regexEmail.test(email.value)){
    alert("Email no válido");
  }
})