// Definicion de variables - objetos y arrays

const precioEntradas = 500;

// Array de peliculas

class pelicula{
    constructor(id, titulo, genero, clasificacion, imagen){
        this.id = id;
        this.titulo = titulo;
        this.genero = genero;
        this.clasificacion = clasificacion;
        this.imagen = imagen;
    }
}

let pelicula1 = new pelicula (1, "El perro samurai: la leyenda de Kakamucho", "Animación", "ATP", '/ImagenesPeliculas/ElPerroSamurai.jpg');
let pelicula2 = new pelicula (2, "Bestia", "Drama", "PM13", '/ImagenesPeliculas/Bestia.jpg');
let pelicula3 = new pelicula (3, "Tren bala", "Acción", "PM16", '/ImagenesPeliculas/TrenBala.jpg');
let pelicula4 = new pelicula (4, "Buena suerte, Leo Grande", "Comedia", "PM16",'/ImagenesPeliculas/BuenaSuerteLeoGrande.jpg');
let pelicula5 = new pelicula (5, "DC Liga de súper mascotas", "Animación", "ATP", '/ImagenesPeliculas/DCLigaDeSuperMascotas.jpg');
let pelicula6 = new pelicula (6, "Jurassic World: dominion", "Acción", "PM13",'/ImagenesPeliculas/JurassicWorld.jpg');
let pelicula7 = new pelicula (7, "Elvis", "Biográfica", "PM13", '/ImagenesPeliculas/Elvis.jpg');
let pelicula8 = new pelicula (8, "El teléfono negro", "Suspenso", "PM16", '/ImagenesPeliculas/TelefonoNegro.jpg');
let pelicula9 = new pelicula (9, "Thor: amor y trueno", "Acción", "PM13", '/ImagenesPeliculas/Thor.jpg');
let pelicula10 = new pelicula (10, "Minions: nace un villano", "animación", "ATP", '/ImagenesPeliculas/Minions2.jpg');

let peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8, pelicula9, pelicula10];

// Array de salas y horarios (por el momento lo voy a plantear como si hubiera una sala exclusiva para cada pelicula)

// Primero creo las variables de horarios

class horario{
    constructor(horarioInicio, capacidad){
        this.horarioInicio = horarioInicio;
        this.capacidad = capacidad;
    }
}

let horario1 = new horario (`12:00`, 50);
let horario2 = new horario (`15:00`, 50);
let horario3 = new horario (`18:00`, 50);
let horario4 = new horario (`21:00`, 50);

let horarios = [horario1, horario2, horario3, horario4];

// Ahora la constante de los dias de la semana

const diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// Aqui se crea el array de las funciones por dia donde a cada uno se le cargan todos los horarios de funcion

class funcion{
    constructor(dia, horarioInicio, capacidad){
        this.dia = dia;
        this.horarioInicio = horarioInicio;
        this.capacidad = capacidad;
    }
}

let funciones = []

function crearFunciones () {
    diasDeLaSemana.forEach(dia => {
        funciones.push (new funcion (dia, horario1.horarioInicio,horario1.capacidad))
        funciones.push (new funcion (dia, horario2.horarioInicio,horario2.capacidad))
        funciones.push (new funcion (dia, horario3.horarioInicio,horario3.capacidad))
        funciones.push (new funcion (dia, horario4.horarioInicio,horario4.capacidad))
    })
    /*console.log (funciones)*/
}

// Una vez definidos todos los horarios para cada dia se crea un nuevo array donde tendremos por cada pelicula las 4 funciones disponibles por dia

class funcionPorPelicula{
    constructor(titulo, dia, horarioInicio, capacidad){
        this.titulo = titulo;
        this.dia = dia;
        this.horarioInicio = horarioInicio;
        this.capacidad = capacidad;
    }
}

let funcionesPorPeliculas = []

function crearFuncionesPorPeliculas () {
    peliculas.forEach(pelicula => {
        funciones.forEach(funcion => {
            funcionesPorPeliculas.push (new funcionPorPelicula (pelicula.titulo, funcion.dia, funcion.horarioInicio, funcion.capacidad))
        })
    })
    /*console.log (funcionesPorPeliculas)*/
}

// Array de combos

class combo {
    constructor (id, descripcion, precio){
        this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

let combo1 = new combo (1, "Pochoclo + bebida", 900);
let combo2 = new combo (2, "Nachos + bebida", 1200);
let combo3 = new combo (3, "Golosinas + bebida", 1000);
let combo4 = new combo (4, "Snack + bebida", 1200);

let combos = [combo1, combo2, combo3, combo4];

// Array de tamaños de combos

class tamaño {
    constructor (id, especificacion, factorModificador){
        this.id = id;
        this.especificacion = especificacion;
        this.factorModificador = factorModificador;
    }
}

let tamaño1 = new tamaño (1, "Regular", 1);
let tamaño2 = new tamaño (2, "Mediano", 1.15);
let tamaño3 = new tamaño (3, "Grande", 1.3);

let tamaños = [tamaño1, tamaño2, tamaño3];

let compra  = [];

let compraCombos = [];

// Array de usuarios

/*let usuarios = [];

class usuario {
    constructor (nombre, apellido, mail, telefono, contraseña, preguntaSeguridad, respuestaSeguridad){
        this.nombre = nombre;
        this. apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.contraseña = contraseña;
        this.preguntaSeguridad = preguntaSeguridad;
        this.respuestaSeguridad = respuestaSeguridad;
    }
}*/

