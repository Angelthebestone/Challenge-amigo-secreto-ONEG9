// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function limpiarCampo() {
  document.getElementById("amigo").value = "";
}
function agregarAmigos() {
    let nombre = document.getElementById('Amigo');
    let verificarNombre = nombre.length
     if (nombre === 0) {
        alert("Debes rellenar con un nombre valido");

     } else {
      listaDeAmigos.push(nombre);
      limpiarCampo();
     }
}