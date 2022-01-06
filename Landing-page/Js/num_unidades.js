//definimos un numero aleatorio entre 100 y 8 para declarar un número de unidades
let numunidades = parseInt(Math.random() * (100 - 8) + 8); 

//Cambiamos el número 
document.querySelector("span").textContent = numunidades;