// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function limpiarCampo() {
  document.getElementById("amigo").value = ""; //limpia el campo de texto
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
    actualizarListadeAmigos(); //actualiza la lista en pantalla
    return; //finaliza la función
  }
}

//primero tengo que crear la variable donde voy a guardar el elemento
function actualizarListadeAmigos() {
let lista = document.getElementById("listaAmigos"); //selecciona el elemento de la lista de amigos
  lista.innerHTML = ""; //limpia el contenido de la lista de amigos
  for (i=0; i < listaDeAmigos.length; i++) { //ciclo for para recorrer la lista de amigos
  let crear = document.createElement("li") //crea un nuevo elemento de lista
  crear.textContent = listaDeAmigos[i];
  lista.appendChild(crear);
  }
}
//función para sortear amigos, con un minimo de 3 amigos
function sortearAmigo() {
  if (listaDeAmigos.length <= 3) {
    alert("Tienes que tener dos amigos como mínimo para poder sortear"); //En el caso que no haya 3 amigos, avisa 
  } else {
    let numeroRandom = Math.floor(Math.random() * listaDeAmigos.length); //genera un numero aleatorio dependiendo de la longitud de la lista
    let amigoSeleccionado = listaDeAmigos[numeroRandom]; //selecciona un amigo aleatorio de la lista
    document.getElementById("resultado").innerHTML = "el amigo sorteado es: " + amigoSeleccionado; //inserta el amigo seleccionado en el HTML
    return;
  }
}

