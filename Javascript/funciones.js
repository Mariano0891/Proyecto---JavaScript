
/*fetch('https://api.themoviedb.org/3/search/movie?api_key=20ed802ba4c45dfee57f4df0dfe0866b&query=thor+amor+trueno&language=es')
.then((resp) => resp.json() )
.then((data) => {
    console.log(data)
})*/

/*busquedaInformacionPelicula ('https://api.themoviedb.org/3/movie/438148?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es')
/*fetch('https://api.themoviedb.org/3/movie/438148?api_key=20ed802ba4c45dfee57f4df0dfe0866b&language=es')
.then((resp) => resp.json() )
.then((data) => {
    console.log(data)
    console.log(data.title)
    console.log(data.original_title)
    console.log(data.overview)
})*/



function cargarPeliculas() {
    peliculas.forEach(pelicula => {
        let div = document.createElement('div')
        div.className = 'pelicula'
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${pelicula.titulo}</h5>
                                <p class="card-text">${pelicula.tituloOriginal}</p>
                                <a href="#" class="btn btn-primary" id="botonComprar${pelicula.id}">Comprar</a>
                            </div>
                        </div>`
                    
    containerPeliculas.appendChild(div)

    let botonComprar = document.getElementById (`botonComprar${pelicula.id}`)
    botonComprar.addEventListener ('click', () => {
        console.log(pelicula.titulo)
        agregarPelicula(pelicula.id)
        Toastify({
            text: "Pelicula seleccionada con exito",
            offset: {
              x: '45vw', 
              y: '50vh', 
            },
          }).showToast();
        document.getElementById('container__peliculas').style.display = 'none'
        /*cargarDiasPeliculas (funcionesPorPeliculas)*/
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
                                <a href="#" class="btn btn-primary" id="botonCombo${combo.id}">Comprar</a>
                            </div>
                        </div>`
    containerCombos.appendChild(div)
    let botonCombo = document.getElementById (`botonCombo${combo.id}`)
    botonCombo.addEventListener ('click', () => {
        console.log(combo.descripcion)
        document.getElementById('container__peliculas').style.display = 'none'
        /*cargarTamaños (tamaños)*/
        agregarCombo (combo.id)
        Toastify({
            text: "Se agrego el combo a su compra",
            offset: {
              x: '45vw', 
              y: '50vh', 
            },
          }).showToast();
    })
    })
}

function cargarTamaños () {
    tamaños.forEach(tamaño => {
        let div = document.createElement('div')
        div.className = 'tamaño'
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <h5 class="card-header">${tamaño.especificacion}</h5>
                            <div class="card-body">
                                <a href="#" class="btn btn-primary" id="botonTamaño${tamaño.id}">Comprar</a>
                            </div>
                        </div>`
    containerTamaños.appendChild(div)
    let botonTamaño = document.getElementById (`botonTamaño${tamaño.id}`)
    botonTamaño.addEventListener ('click', () => {
        console.log(tamaño.especificacion)
        document.getElementById('container__peliculas').style.display = 'none'
        let factorModificador = tamaño.factorModificador
        /*agregarCombo (combo.id)*/
    })
    })
}


function agregarPelicula (id) {
    let peliculaAgregar = peliculas.find(pelicula=> pelicula.id == id)
    resumenCompra.push(peliculaAgregar);
    console.log (resumenCompra)
    guardarCompra ()
    mostrarCompra(peliculaAgregar)
}

function mostrarCompra(peliculaAgregar){
    let div = document.createElement ('div')
    div.className = 'pelicula__seleccionada'
    div.innerHTML= `<p>Su pelicula seleccionada es: ${peliculaAgregar.titulo}</p>`
    containerCompra.appendChild(div)
}

function agregarCombo (id) {
    let comboAgregar = combos.find(combo=> combo.id == id)
    /*this.precio = this.precio * factorModificador*/
    resumenCompra.push(comboAgregar)
    guardarCompra ()
    mostrarCombo(comboAgregar)   
}

function mostrarCombo (comboAgregar){
    let div = document.createElement ('div')
    div.className = 'combo__seleccionado'
    div.innerHTML= `<p>${comboAgregar.descripcion}</p>
                    <p>${comboAgregar.precio}</p>`
    containerCompra.appendChild(div)
}

function guardarCompra () {
    localStorage.setItem("compraRealizada", JSON.stringify(resumenCompra))
}

function compraAnterior () {
    let ultimaCompra = JSON.parse(localStorage.getItem("compraRealizada"));
    if(ultimaCompra){
        console.log(ultimaCompra)
        /*peliculaAgregar = ultimaCompra.slice (0, 1);
        console.log (peliculaAgregar)
        resumenCompra.push(peliculaAgregar)
        console.log(resumenCompra)
        mostrarCompra(peliculaAgregar)*/
    }
}

    

function verificarUsuario (){
    let botonLogin = document.getElementById (`botonLogin`)
        botonLogin.addEventListener ('click', () => {
            let usuarioIngresado = document.getElementById("usuario").value;
            const verificacion = usuarios.some ((usuario)=>usuario.nombre == usuarioIngresado)
            if (verificacion == true) {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Bienvenido ${usuarioIngresado}`,
                    showConfirmButton: true,
                    timer: 3000,
                  })
                console.log(`bienvenido ${usuarioIngresado}`)
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario incorrecto',
                  })
            }
        })
}



/*function cargarDiasPeliculas () {
    let diasPeliculas = funcionesPorPeliculas.filter((funcionPorPelicula) => funcionPorPelicula.titulo == pelicula.titulo)
    diasPeliculas.forEach(diaPelicula => {
        let div = document.createElement ('div')
        div.className = 'dia'
        div.innerHTML = `<div class="card w-75">
                            <div class="card-body">
                            <h5 class="card-title">${dia}</h5>
                            <p class="card-text">a</p>
                            <a href="#" class="btn btn-primary">Seleccionar</a>
                            </div>
                        </div>`
    containerDias.appendChild(div)
    })
}*/

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
