//1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.
let nombre = 'Julian';
console.log(nombre);

//2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.
var num1 = 20;
var num2 = 30;
console.log(num1 + num2);

//3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.
const PI = 3.14159;
console.log(PI);

//4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo personalizado.
saludar();
function saludar() {
    console.log('Bienvenido a javascript ' + nombre);
}

//5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y `false` si es impar
console.log(esPar(21));
console.log(esPar(26));

function esPar(numero) {
    return numero % 2 === 0;
}

//6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la suma de sus elementos
const arr = [1, 2, 3, 4, 5];
console.log(sumarArray(arr));

function sumarArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            total += arr[i];
        }
    }
    return total;
}

//7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.
const persona = {
    nombre: 'John Doe',
    profesion: 'Dev',
    edad: 30,
};
console.log(persona);

//8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un objeto con esas propiedades.
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
var prod = new Producto('CocaCola', 500, 1500);
console.log(prod);

//9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`, `director` y `anio`.
function Pelicula() {
    this.nombre = 'Rambo';
    this.director = 'Sylvester Stallone';
    this.anio = 1982;
}
var peli = new Pelicula();
console.log(peli);

//10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.
var frutas = ['banana', 'manzana', 'pera', 'futilla', 'sandia'];
console.log(frutas);
console.log('El 3er elemento del arreglo frutas es: ' + frutas[2]);

//11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.
frutas.push("melon");
console.log(frutas);

//12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne un nuevo array solo con los números pares.
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var pares = filtrarPares(numeros);
console.log(pares);
function filtrarPares(numeros) {
    const pares = numeros.filter(esPar);
    return pares;
}

//13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un objeto persona con esas propiedades.
function crearPersona(nombre, edad) {
    const persona = {
        nombre: nombre,
        edad: edad,
    };
    return persona;
}
var persona2 = crearPersona('John Doe', 20);
console.log(persona2);

//14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne una cadena con su información.
function obtenerInfo(persona) {
    const info = 'El nombre de la persona es ' + persona.nombre + ' y tiene ' + persona.edad + ' anios.';
    return info;
}
console.log(obtenerInfo(persona2));

//15. Crear una función `duplicarArray` que tome un array de números como parámetro y retorne un nuevo array con cada elemento duplicado.
function duplicarArray(arr) {
    let nuevo = [];
    for (var i = 0; i < arr.length; i++) {
        nuevo.push(arr[i]);
        nuevo.push(arr[i]);
    }
    return nuevo;
}
var dupli = duplicarArray(numeros);
console.log(dupli);

//16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la cadena invertida.
function invertirCadena(cadena) {
    const arrayDeCaracteres = cadena.split('');
    const arrayInvertido = arrayDeCaracteres.reverse();
    const cadenaInvertida = arrayInvertido.join('');
    return cadenaInvertida;
}
const cadenaOriginal = "Join the Navy!";
const cadenaInvertida = invertirCadena(cadenaOriginal);
console.log(cadenaInvertida);

//17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al número.
function filtrarPorLongitud(arrayDePalabras, longitudMinima) {
    const palabrasFiltradas = arrayDePalabras.filter(function (palabra) {
        return palabra.length > longitudMinima;
    });
    return palabrasFiltradas;
}
const palabras = ['gato', 'perro', 'elefante', 'ratón', 'tigre'];
const longitudMinima = 5;
const palabrasFiltradas = filtrarPorLongitud(palabras, longitudMinima);
console.log(palabrasFiltradas);

//18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como `nombre`, `edad` y `promedio`.
const estudiantes = [
    {
        nombre: 'Juan',
        edad: 20,
        promedio: 85.5
    },
    {
        nombre: 'María',
        edad: 22,
        promedio: 90.0
    },
    {
        nombre: 'Carlos',
        edad: 19,
        promedio: 78.2
    }
];
console.log(estudiantes[0].nombre);
console.log(estudiantes[1].edad);
console.log(estudiantes[2].promedio);

//19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y retorne el objeto del estudiante con ese nombre.
function buscarEstudiante(arrayDeEstudiantes, nombreABuscar) {
    const estudianteEncontrado = arrayDeEstudiantes.find(function (estudiante) {
        return estudiante.nombre === nombreABuscar;
    });
    return estudianteEncontrado;
}

const nombreABuscar = 'María';
const estudianteEncontrado = buscarEstudiante(estudiantes, nombreABuscar);
if (estudianteEncontrado) {
    console.log('Estudiante encontrado:');
    console.log(estudianteEncontrado);
} else {
    console.log('Estudiante no encontrado');
}

//20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio de sus promedios.
function promedioClase(estudiantes) {
    let promedio = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        if (typeof estudiantes[i].promedio === "number") {
            promedio += estudiantes[i].promedio;
        }
    }
    promedio = promedio / estudiantes.length;
    return promedio;
}
console.log(promedioClase(estudiantes));

//21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como `arrancar` y `detener`
const coche = {
    marca: 'Volkswagen',
    modelo: 'Gol',
    anio: 1999,
    arrancar: function () {
        console.log('El coche está arrancando...');
    },
    detener: function () {
        console.log('El coche se está deteniendo...');
    }
};
console.log(`Marca: ${coche.marca}`);
console.log(`Modelo: ${coche.modelo}`);
console.log(`Año: ${coche.anio}`);
coche.arrancar();
coche.detener();

//22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar` que imprima un saludo personalizado.
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    };
}
const persona1 = new Persona('Juan', 30);
persona1.saludar();

//23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un producto al carrito.
function Carrito() {
    this.productos = [];
    this.agregarProducto = function (producto) {
        this.productos.push(producto);
    };
}
const miCarrito = new Carrito();
var prod2 = new Producto('Fanta', 400, 1500);
var prod3 = new Producto('Sprite', 500, 1500);

miCarrito.agregarProducto(prod);
miCarrito.agregarProducto(prod2);
miCarrito.agregarProducto(prod3);

console.log(miCarrito.productos);

//24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y retorne un nuevo array con los números ordenados de menor a mayor.
function ordenarNumeros(arrayDeNumeros) {
    const numerosOrdenados = arrayDeNumeros.slice().sort(function (a, b) {
        return a - b;
    });
    return numerosOrdenados;
}
const numerosDesord = [5, 1, 4, 2, 3];
const numerosOrdenados = ordenarNumeros(numerosDesord);
console.log(numerosOrdenados);

//25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y retorne un nuevo array sin el estudiante con ese nombre.
function eliminarEstudiante(arrayDeEstudiantes, nombreAEliminar) {
    const estudiantesFiltrados = arrayDeEstudiantes.filter(function (estudiante) {
        return estudiante.nombre !== nombreAEliminar;
    });
    return estudiantesFiltrados;
}
const nombreAEliminar = 'María';
const estudiantesSinEliminado = eliminarEstudiante(estudiantes, nombreAEliminar);
console.log(estudiantesSinEliminado);

//26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de los productos.
function totalCarrito(miCarrito) {
    const precioTotal = miCarrito.productos.reduce(function (total, producto) {
        return total + producto.precio;
    }, 0);
    return precioTotal;
}
const precioTotalCarrito = totalCarrito(miCarrito);
console.log(`Precio total del carrito: $${precioTotalCarrito}`);

//27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`, `multiplicar` y `dividir`.
function crearCalculadora() {
    return {
        sumar: function (a, b) {
            console.log(a + " + " + b)
            return a + b;
        },
        restar: function (a, b) {
            console.log(a + " - " + b)
            return a - b;
        },
        multiplicar: function (a, b) {
            console.log(a + " * " + b)
            return a * b;
        },
        dividir: function (a, b) {
            if (b === 0) {
                return 'Error - División por cero';
            }
            console.log(a + " / " + b)
            return a / b;
        }
    };
}
const calculadora = crearCalculadora();

console.log('Suma:', calculadora.sumar(5, 3));
console.log('Resta:', calculadora.restar(10, 4));
console.log('Multiplicación:', calculadora.multiplicar(2, 6));
console.log('División:', calculadora.dividir(8, 2));
console.log('/0', calculadora.dividir(10, 0));

//28. Crear una función `crearCuentaBancaria` que retorne un objeto con métodos `depositar`, `retirar` y `saldo`.
function crearCuentaBancaria() {
    let dinero = 0;
    return {
        depositar: function (deposito) {
            if (deposito > 0) {
                dinero += deposito;
                console.log('Se han depositado $' + deposito);
            }
        },
        retirar: function (cantidad) {
            if (cantidad <= dinero) {
                dinero -= cantidad;
                console.log('Se han retirado $' + cantidad);
            } else {
                console.log('Saldo Insuficiente');
            }
        },
        saldo: function () {
            console.log('El saldo de la cuenta es de: $' + dinero);
        }
    };
}

var cuenta = new crearCuentaBancaria();
cuenta.depositar(20000);
cuenta.retirar(8000);
cuenta.retirar(50000);
cuenta.saldo();

//29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método `detalles` que imprima la información del libro.
function Libro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.detalles = function () {
        console.log('Título: ' + titulo);
        console.log('Autor: ' + autor);
        console.log('Paginas: ' + paginas);
    };
}

const miLibro = new Libro('Librito', 'Gran Autor', 420);
miLibro.detalles();

//30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays. Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes.
function crearTarea(titulo) {
    return {
        titulo: titulo,
        completada: false
    };
}

const listaDeTareas = [];

function agregarTarea(titulo) {
    const tarea = crearTarea(titulo);
    listaDeTareas.push(tarea);
    console.log(`Tarea "${titulo}" agregada.`);
}

function marcarTareaComoCompletada(indice) {
    if (indice >= 0 && indice < listaDeTareas.length) {
        listaDeTareas[indice].completada = true;
        console.log(`Tarea "${listaDeTareas[indice].titulo}" marcada como completada.`);
    } else {
        console.log('Índice de tarea inválido.');
    }
}

function listarTareasPendientes() {
    console.log('Tareas Pendientes:');
    listaDeTareas.forEach(function (tarea, indice) {
        if (!tarea.completada) {
            console.log(`${indice + 1}. ${tarea.titulo}`);
        }
    });
}

agregarTarea('Hacer la compra');
agregarTarea('Estudiar para el examen');
agregarTarea('Pasear al perro');

marcarTareaComoCompletada(1);

listarTareasPendientes();