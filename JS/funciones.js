const containerPeliculasTitulo = document.getElementById('container__peliculasTitulo')

const containerPeliculas = document.getElementById('container__peliculas');

const containerModalInfo = document.getElementById('container__modalInfo');

const containerCompra = document.getElementById('container__compra');

function cargarPeliculas() {
    document.getElementById('container__login').style.display = 'none'
    peliculas.forEach(pelicula => {
        let div = document.createElement('div')
        div.className = 'pelicula'
        div.innerHTML = `<div class="card text-bg-dark mb-3 text-center" style="max-width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/original${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${pelicula.titulo}</h5>
                                <p class="card-text">${pelicula.slogan}</p>
                                <input class ="cantidadEntradas" type="text" name="cantidadEntradas" id="cantidadEntradas${pelicula.id}" placeholder="Cant. entradas">
                                <button type="button" class="btn btn-primary" id="botonInfo${pelicula.id}" data-bs-toggle="modal" data-bs-target="#modal__${pelicula.id}">+ info</button>
                                <a href="#" class="btn btn-primary" id="botonComprar${pelicula.id}">Comprar</a>
                            </div>
                        </div>
                        <div class="modal fade" id="modal__${pelicula.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">${pelicula.titulo}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h5>Titulo original: ${pelicula.tituloOriginal}</h5>
                                    <p>Genero: ${pelicula.genero}</p>
                                    <p>Resumen: ${pelicula.resumen}</p>

                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                            </div>
                        </div>`
    containerPeliculas.appendChild(div)

    let botonComprar = document.getElementById (`botonComprar${pelicula.id}`)
    botonComprar.addEventListener ('click', () => {
        let cantidadEntradas = document.getElementById(`cantidadEntradas${pelicula.id}`).value
        if (cantidadEntradas > 0){
            agregarPelicula(pelicula.id)
            agregarEntradas(cantidadEntradas)
            guardarCompra ()
            Toastify({
                text: "Pelicula seleccionada con exito",
                offset: {
                x: '45vw', 
                y: '50vh', 
                },
            }).showToast();
        }
        })
    })
    
}

function cargarTituloPeliculas () {
    let h2 = document.createElement ('h2')
    h2.className = "peliculas__titulo"
    h2.innerText = `Peliculas en Cartelera`
    containerPeliculasTitulo.appendChild(h2)
}

let peliculas = [];

function crearArrayPeliculas () {
    direccionesBusqueda.forEach(direccion => {
        busquedaInformacionPelicula (direccion)
    })
}

async function busquedaInformacionPelicula (direccion){
    await fetch(direccion)
    .then( (resp) => {
        return resp.json(); })
    .then( (data) => {
        let peliculaNueva = new pelicula (data.id, data.title, data.tagline, data.original_title, data.genres, data.overview, data.poster_path, data.vote_average, data.release_date)
        peliculas.push(peliculaNueva)
    })
}

function agregarPelicula (id) {
    let peliculaAgregar = peliculas.find(pelicula=> pelicula.id == id)
    resumenCompra.push(peliculaAgregar);
    mostrarCompra(peliculaAgregar)
}
function agregarEntradas (cantidadEntradas) {
    resumenCompra.push(cantidadEntradas)
    mostrarCantidadEntradas (cantidadEntradas)
}

function mostrarCantidadEntradas(cantidadEntradas){
    let totalCompra = cantidadEntradas * precioEntradas
    resumenCompra.push(totalCompra)
    let div = document.createElement ('div')
    div.className = 'container__entradas'
    div.innerHTML= `<p>Cantidad de entradas: ${cantidadEntradas}</p>
                    <p>Costo total: ${totalCompra}</p>`
    containerCompra.appendChild(div)
}

function mostrarCompra(peliculaAgregar){
    let div = document.createElement ('div')
    div.className = 'pelicula__seleccionada'
    div.innerHTML= `<p>Su pelicula seleccionada es: ${peliculaAgregar.titulo}</p>`
    containerCompra.appendChild(div)
}

function guardarCompra () {
    localStorage.setItem("compraRealizada", JSON.stringify(resumenCompra))
}

function compraAnterior () {
    let ultimaCompra = JSON.parse(localStorage.getItem("compraRealizada"));
    if(ultimaCompra){
        console.log(ultimaCompra)
    }
}