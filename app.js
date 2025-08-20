// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function limpiarCampo() {
  document.getElementById("amigo").value = "";
}
function agregarAmigo() { 
 
  let nombreInput = document.getElementById('amigo'); //extrae el nombre de la caja de texto

  let nombre = nombreInput.value; //convierte la entrada HTML en un valor
  console.log(nombre);
  let verificarNombre = nombre.length; //verifica si el nombre tiene contenido
  console.log(verificarNombre);
  if (verificarNombre === 0) { //ciclo if para verificar la validez del nombre
    alert("Debes rellenar con un nombre valido");
  } else { //si el nombre es valido
    listaDeAmigos.push(nombre); //agrega el nombre a la lista de amigos
    console.log(listaDeAmigos); //muestra la lista actualizada de amigos
    limpiarCampo(); //limpia el campo de entrada
    return; //finaliza la función
  }
}
