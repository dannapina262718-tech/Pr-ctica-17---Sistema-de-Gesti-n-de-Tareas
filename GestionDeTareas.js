// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {

  /* uso un for para recorrer el arreglo y por cada elemenoto imprimo su nombre y evaluo 
    en caso de set true imprimo completada y en caso contrario pendiente
  */
  console.log("TAREA         ESTADO")
  for(let i = 0; i < lista.length; i++ ){
    console.log(lista[i].nombre,":",(lista[i].completada ? "Completada" : "Pendiente"))
  }
  
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  //en la variable completadas se guardan las tareas que tengan true en completadas con ayuda del filter
  const completadas = lista.filter(tarea => tarea.completada === true);

  return completadas
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  //en la variable pendientes se guardan las tareas que tengan false en completadas con ayuda del filter
  const pendientes = lista.filter(tarea => tarea.completada === false);

  return pendientes
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  //en la nueva lista de tareaNombres por cada elemento en la lista original se guarda unicamente el nombre
  const tareasNombres = lista.map(tarea => tarea.nombre)
  return tareasNombres
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  // se saca la cantidad de tareas con la funcion length
  const bcantidadTareas = lista.length
  return cantidadTareas
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    //se invoca la función global mostrarTareas pasando la lista de atreas
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    //se invoca la funcion obtenerCompletadas pasando la lista de tareas
    const completadas = obtenerCompletadas(this.tareas);
    mostrarTareas(completadas); //usamos el metodo de mostrar tareas para que tenga formato
  },

  mostrarPendientes: function() {
    //se invoca la funcion obtenerPendientes pasando la lista de tareas
    const pendientes = obtenerPendientes(this.tareas);
    mostrarTareas(pendientes); //usamos el metodo de mostrar tareas para que tenga formato
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

//vemos si el arreglo principal tareas con length 
if (tareas.length === 0) {
  console.log("No hay tareas");
} else if (tareas.every(tarea => tarea.completada)) { //y con el método every() para saber si todas estan completadas
  console.log("Todas las tareas completadas");
}

// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

switch (opcion) {
  case 1:
    //muestra todas las tareas a través del método de sistema
    sistema.mostrarTareas();
    break;

  case 2:
    //muestra las tareas completadas con el metodo de mostarCompletadas de sistema
    sistema.mostrarCompletadas();
    break;

  case 3:
    //muestra las tareas pendientes con el metodo de mostrarPendientes de sistema
    sistema.mostrarPendientes();
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

// mostrarTareas(tareas);

/*
const completadas = obtenerCompletadas(tareas);
console.log("Treas completadas: ")
completadas.forEach(tarea => {console.log(tarea.nombre)}) // un foreach para que imprima solamente el nombre
*/

/*
console.log("Tareas pendientes:")
const pendientes = obtenerPendientes(tareas)
pendientes.forEach(tarea => {console.log(tarea.nombre)})// un foreach para que imprima solamente el nombre
*/

/*
const NombresTareas = obtenerNombres(tareas)
console.log(NombresTareas)
*/

/*
const cantidad = contarTareas(tareas)
console.log("La cantidad de tareas es:",cantidad)
*/

/*
console.log("todas las tareas (método sistema.mostrarTareas):");
sistema.mostrarTareas();

console.log("\ntareas completadas (método sistema.mostrarCompletadas):");
sistema.mostrarCompletadas();

console.log("\ntareas pendientes (método sistema.mostrarPendientes):");
sistema.mostrarPendientes();
*/

console.log("\nnombres de todas las tareas (obtenerNombres):");
const nombres = obtenerNombres(tareas);
console.log(nombres);

