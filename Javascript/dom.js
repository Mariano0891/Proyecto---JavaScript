
const containerPeliculas = document.getElementById('container__peliculas');

const containerCombos = document.getElementById('container__combos');

const formulario = document.getElementById ('formulario__registro');

crearFunciones ();

crearFuncionesPorPeliculas (peliculas);

cargarPeliculas (peliculas);

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
        let div = document.createElement('div')
        div.className = 'pelicula'
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${pelicula.titulo}</h5>
                                <p class="card-text">${pelicula.genero}</p>
                                <p class="card-text">${pelicula.clasificacion}</p>
                            </div>
                        </div>`
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

/*let linkRegistro = document.getElementById('registrarse')
linkRegistro.addEventListener ('click', () => {
    console.log(`Acceso al registro`)
    document.getElementById('container__peliculas').style.display = 'none'
    formularioRegistro (linkRegistro)
})

function formularioRegistro () {
    let form = document.createElement ('form action="#"')
    form.className = 'formularioRegistro'
    form.innerHTML = `<label for="nombre">Nombre</label>
                    <input type="text" id="nombre" required>
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido">
                    <label for="email">Mail</label>
                    <input type="email" id="email" required>
                    <label for="telefono">Telefono</label>
                    <input type="tel" id="telefono">
                    <label for="contraseña" required>Contraseña</label>
                    <input type="password" id="contraseña">
                    <label for="repetirContraseña"required>Repita contraseña</label>
                    <input type="password" id="repitaContraseña">
                    <input type="submit" value="Enviar" id="botonEnvio">                 
                `
    formulario.appendChild(div)
}*/

