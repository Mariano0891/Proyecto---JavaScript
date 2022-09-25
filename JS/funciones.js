const containerPeliculasTitulo = document.getElementById('container__peliculasTitulo')

const containerPeliculas = document.getElementById('container__peliculas');

function cargarPeliculas() {
    document.getElementById('container__login').style.display = 'none'
    nuevoPeliculas.forEach(nuevoPelicula => {
        let div = document.createElement('div')
        div.className = 'pelicula'
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/w342${nuevoPelicula.imagen}" class="card-img-top" alt="${nuevoPelicula.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${nuevoPelicula.titulo}</h5>
                                <p class="card-text">${nuevoPelicula.tituloOriginal}</p>
                                <a href="#" class="btn btn-primary" id="botonComprar${pelicula.id}">Comprar</a>
                            </div>
                        </div>`
    containerPeliculas.appendChild(div)
    })
    
}

function cargarTituloPeliculas () {
    let div = document.createElement ('div')
    div.className = "peliculas__titulo"
    div.innerHTML = `<h2>Peliculas en Cartelera</h2>`
    containerPeliculasTitulo.appendChild(div)
}

let nuevoPeliculas = [];

function crearArrayPeliculas () {
    direccionesBusqueda.forEach(direccion => {
        busquedaInformacionPelicula (direccion)
    })
    console.log(nuevoPeliculas)
    console.log(nuevoPeliculas.length)
}

async function busquedaInformacionPelicula (direccion){
    await fetch(direccion)
    .then( (resp) => {
        return resp.json(); })
    .then( (data) => {
        let peliculaNueva = new nuevoPelicula (data.id, data.title, data.original_title, data.overview, data.poster_path)
        nuevoPeliculas.push(peliculaNueva)
    })
 }