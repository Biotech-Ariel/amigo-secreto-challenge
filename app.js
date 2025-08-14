// Inicio del juego "amigo-secreto" - JS
// Declaramos un array para almacenar los nombres de los amigos
const listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const htmlListaAmigos = document.getElementById("listaAmigos");
const ulresultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    if (inputAmigo.value === "") {
        alert("Ingresa un nombre valido.");
    }
    listaAmigos.push(inputAmigo.value);
    //Agregamos código para mostrar la lista
    htmlListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = "";
};

// Función para sortear los amigos en la lista
function sortearAmigo() {
    const listaSorteada = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[listaSorteada];
    ulresultado.innerHTML = `<p>Tu amigo secreto es: ${amigoSorteado}</p>`;
};