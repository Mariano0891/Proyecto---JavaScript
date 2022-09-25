const containerPeliculas = document.getElementById('container__peliculas');

function cargarPeliculas() {
    peliculas.forEach(pelicula => {
        let div = document.createElement('div')
        div.className = 'pelicula'
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${pelicula.titulo}</h5>
                                <p class="card-text">${pelicula.genero}</p>
                                <p class="card-text">${pelicula.clasificacion}</p>
                                <a href="#" class="btn btn-primary" id="botonComprar${pelicula.id}">Comprar</a>
                            </div>
                        </div>`
    containerPeliculas.appendChild(div)
    })
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