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

//nuevo array

let direccionesBusqueda = []

direccionesBusqueda = ['https://api.themoviedb.org/3/movie/438148?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/366672?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/758330?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/756999?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/361743?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/616037?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es']

// Creacion del nuevo array de peliculas




class nuevoPelicula{
    constructor(id, titulo, tituloOriginal, resumen, imagen){
        this.id = id;
        this.titulo = titulo;
        this.tituloOriginal = tituloOriginal;
        this.resumen = resumen;
        this.imagen = imagen;
    }
}