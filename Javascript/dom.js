
const containerPeliculas = document.getElementById('container__peliculas');

const containerCombos = document.getElementById('container__combos');


cargarPeliculas (peliculas)

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

    let botonComprar = document.getElementById (`botonComprar${pelicula.id}`)
    botonComprar.addEventListener ('click', () => {
        console.log(pelicula.titulo)
        document.getElementById('container__peliculas').style.display = 'none'
        cargarCombos (combos)
    })

    })
}

function cargarCombos () {
    combos.forEach(combo => {
        let div = document.createElement('div')
        div.className = 'combo'
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <h5 class="card-header">Combo N°${combo.id}</h5>
                            <div class="card-body">
                                <h5 class="card-title">${combo.descripcion}</h5>
                                <p class="card-text">$${combo.precio}</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>`
    containerCombos.appendChild(div)
    })
}