// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para adicionar nombres
function adicionar() {
  let input = document.getElementById("nombre");
  let nombre = input.value.trim();

  // Validar entrada vacía
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido");
    return;
  }

  // Validar nombre duplicado
  if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista");
    input.value = "";
    input.focus();
    return;
  }

  // Agregar nombre a la lista
  amigos.push(nombre);
  mostrarLista();
  input.value = "";
  input.focus();
}

// Función para mostrar lista en pantalla
function mostrarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  
  amigos.forEach(function(amigo, indice) {
    let item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `
      <span>${amigo}</span>
      <button class="btn btn-outline-danger btn-sm" onclick="eliminar(${indice})">
        ✖
      </button>
    `;
    lista.appendChild(item);
  });
}

// Función para eliminar un nombre específico
function eliminar(indice) {
  let nombreEliminado = amigos[indice];
  
  if (confirm(`¿Estás seguro de eliminar a "${nombreEliminado}"?`)) {
    amigos.splice(indice, 1);
    mostrarLista();
    
    // Limpiar resultado si se elimina el nombre seleccionado
    let resultado = document.getElementById("resultado");
    if (resultado.textContent.includes(nombreEliminado)) {
      resultado.textContent = "";
    }
  }
}

// Función para sortear un amigo al azar
function sortear() {
  // Validar que haya nombres en la lista
  if (amigos.length === 0) {
    alert("Primero agrega al menos un nombre");
    return;
  }

  // Seleccionar índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);
  let seleccionado = amigos[indice];
  
  // Mostrar resultado
  document.getElementById("resultado").textContent = "El amigo secreto es: " + seleccionado;
}

// Permitir agregar con Enter
document.getElementById("nombre").addEventListener("keypress", function(evento) {
  if (evento.key === "Enter") {
    adicionar();
  }
});

// Enfocar el campo al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("nombre").focus();
});