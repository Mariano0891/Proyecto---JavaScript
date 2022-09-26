let precioEntradas = 500;

class pelicula{
    constructor(id, titulo, slogan, tituloOriginal, genero, resumen, imagen, puntuacion, fechaLanzamiento){
        this.id = id;
        this.titulo = titulo;
        this.slogan = slogan;
        this.tituloOriginal = tituloOriginal;
        this.genero = genero;
        this.resumen = resumen;
        this.imagen = imagen;
        this.puntuacion = puntuacion;
        this.fechaLanzamiento = fechaLanzamiento;
    }
}

// Array de peliculas

let direccionesBusqueda = []

direccionesBusqueda = ['https://api.themoviedb.org/3/movie/19995?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/619730?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/760161?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/893529?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/766475?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/913290?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/800939?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/830788?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/848763?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/676705?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/762504?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/610150?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/882040?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/366672?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/718930?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/539681?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es',
    'https://api.themoviedb.org/3/movie/438148?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es']

let resumenCompra = [];