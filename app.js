// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function limpiarCampo() {
  document.getElementById("amigo").value = "";
}
function agregarAmigo() {
  let nombreInput = document.getElementById('Amigo');
  let nombre = nombreInput.value.trim();
  console.log(nombre);
  let verificarNombre = nombre.length;
  console.log(verificarNombre);
  if (verificarNombre === 0) {
    alert("Debes rellenar con un nombre valido");
  } else {
    listaDeAmigos.push(nombre);
    limpiarCampo();
  }
}