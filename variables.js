
/* para los comentarios */
//Variables en Java script

var nombre = "Fede"; //Asigno una variable


console.log(nombre); //Escribir la variable por la consola

var numero = 1000;
console.log(numero)



//Variables tipo Objectos

var persona = {
    nombre:"Nico",
    apellido: "Fernandez",
    telefono: 1234567
};

var $ciudad = "Buenos aires";

let _dni = 123456789;

let cuentaAfip = 1234125126123;

const dni = 12312415213;
const fechaNacimiento = 24

console.log(persona)

//Trabajando con el Dom

let titulo = document.getElementById('titulo');//Obtengo el elemento de html

//Escribo en el Archivo html

titulo.innerHTML = "Nuevo Título para el index del html";

let parrafo = document.getElementById('parrafo');

parrafo.innerHTML = "Cambiando el parrafo de html";

