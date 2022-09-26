
const containerFormulario = document.getElementById('container__formulario');

const containerRecupero = document.getElementById('container__recuperoContraseña');

const headerDatosUsuario = document.getElementById('header__usuario');

// puesta en funcionamiento de la verificacion de usuario

verificarUsuario();

// Diagrama de elemento usuario

class usuario {
    constructor (nombre, apellido, mail, contraseña, preguntaSeguridad, respuestaSeguridad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contraseña = contraseña;
        this.preguntaSeguridad = preguntaSeguridad;
        this.respuestaSeguridad = respuestaSeguridad;
    }
}

let usuarioActivo;

//usuario harcodeado de prueba

let usuario1 = new usuario ("admin", "principal", "admin@admin.com.ar", 123,"¿Cual es el nombre de su primer mascota?", "ronnie");

let usuarios = [usuario1];

//Declaracion de la funcion para verificar usuarios

function verificarUsuario () {
    let botonLogin = document.getElementById (`login__botonAcceso`)
    botonLogin.addEventListener ('click', () => {
        let usuarioIngresado = document.getElementById("usuario").value;
        let contraseñaIngresada = document.getElementById("contraseñaUsuario").value;
        const verificacionUsuario = usuarios.some ((usuario)=>usuario.mail == usuarioIngresado && usuario.contraseña == contraseñaIngresada)
        if (verificacionUsuario == true) {
            let usuarioActivo = usuarios.find(usuario=>usuario.mail == usuarioIngresado)
            cargaDatosUsuarioActivo (usuarioActivo)
            botonModal ()
            cargarPeliculas ()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Bienvenido ${usuarioActivo.nombre}`,
                    showConfirmButton: true,
                    timer: 3000,
                    })
                console.log(`bienvenido ${usuarioActivo.nombre}`)
                console.log(peliculas.length)
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'No puede acceder',
                    text: 'Usuario y/o contraseña incorrectas',
                })
            }
        })
}

//Carga de datos usuarioActivo

function cargaDatosUsuarioActivo (usuarioActivo) {
    let div = document.createElement ('div')
    div.className = "usuario__bienvenida"
    div.innerHTML = `<h5 class="usuario__bienvenida-mensaje">Bienvenido ${usuarioActivo.nombre}</h5>`
    headerDatosUsuario.appendChild(div)
}

//Activacion de boton modal

function botonModal () {
    let div = document.createElement ('div')
    div.className = "header__botonModal"
    div.innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i class="fa-solid fa-ticket"></i>
                    </button>`
    headerDatosUsuario.appendChild(div)
} 

//activacion del despliegue del formulario de registro

let linkRegistro = document.getElementById('registrarse')
linkRegistro.addEventListener ('click', () => {
    document.getElementById('container__login').style.display = 'none'
    document.getElementById('container__formulario').style.background = 'black'
    document.getElementById('container__formulario').style.border = '2px solid white'
    formularioRegistro (linkRegistro)
});

//Despliegue del formulario de registro

function formularioRegistro () {
    let form = document.createElement ('form')
    form.className = 'formulario__registro'
    form.innerHTML = `<h3 class="formulario__titulo">Formulario de Registro</h3>
                    <input class="formulario__campos" type="text" name="nombres" id="nombre" placeholder="Nombre">          
                    <input class="formulario__campos" type="text" name="apellido" id="apellido" placeholder="Apellido">          
                    <input class="formulario__campos" type="email" name="mail" id="mail" placeholder="email (este sera su usuario)">          
                    <input class="formulario__campos" type="password" name="contraseña" id="contraseña" placeholder="Contraseña">          
                    <input class="formulario__campos" type="password" name="contraseña" id="confirmacion__contraseña" placeholder="Confirme su contraseña">
                    <select class="formulario__campos" name="preguntaDeSeguridad" id="preguntaDeSeguridad">
                        <option value="nombreMascota">¿Cual es el nombre de su primer mascota?</option>
                        <option value="apellidoMadre">¿Cual es el apellido de soltera de su madre?</option>
                        <option value="marcaVehiculo">¿Cual es la marca de su primer vehiculo?</option>
                    </select>
                    <input class="formulario__campos" type="text" name="respuestaDeSeguridad" id="respuestaDeSeguridad" placeholder="Ingrese su respuesta">
                    <input id="formulario__botonRegistro" class="formulario__botonRegistro" type="submit" value="Crear Usuario">`
    containerFormulario.appendChild(form)
    guardarFormulario()
};

//Creacion de nuevos usuarios con el registro

function guardarFormulario () {   
    let guardarNuevoUsuario = document.getElementById (`formulario__botonRegistro`)
    guardarNuevoUsuario.addEventListener ('click', validarFormulario);
} 

// Funcion para validar el formulario

function validarFormulario (e) {
    e.preventDefault()
    let nombreSeleccionado = document.getElementById ('nombre').value
    let apellidoSeleccionado = document.getElementById ('apellido').value
    let mailSeleccionado = document.getElementById ('mail').value
    let contraseñaSeleccionada = document.getElementById ('contraseña').value
    let contraseñaConfirmacion = document.getElementById ('confirmacion__contraseña').value
    let preguntaSeguridadSeleccionada = document.getElementById ('preguntaDeSeguridad').value
    let respuestaSeguridadSeleccionada = document.getElementById ('respuestaDeSeguridad').value
    if (nombreSeleccionado === '') {
        mensajeAlerta ();
        return;
        }else if (apellidoSeleccionado == '') {
            mensajeAlerta ();
            return;
            } else if (mailSeleccionado == '') {
                mensajeAlerta ();
                return;
                } else if (usuarios.some ((usuario)=>usuario.mail == mailSeleccionado)) {
                    mensajeUsuarioYaExiste ();
                    return;
                    } else if (contraseñaSeleccionada == '' || contraseñaSeleccionada.length < 4) {
                        mensajeContraseñaNoCumple ();
                        return;
                        }else if (contraseñaConfirmacion != contraseñaSeleccionada) {
                            mensajeContraseñasNoCoinciden ();
                            return;
                            }else if (respuestaSeguridadSeleccionada == '') {
                                mensajeAlerta ();
                                return;
                                }else {
                                    let usuarioNuevo = new usuario (nombreSeleccionado, apellidoSeleccionado, mailSeleccionado, contraseñaSeleccionada, preguntaSeguridadSeleccionada, respuestaSeguridadSeleccionada);
                                    usuarios.push(usuarioNuevo);
                                    guardarUsuariosLS ();
                                    mensajeRegistroExitoso ();
                                }
}

// Almacenamiento de array en localStorage

function guardarUsuariosLS () {
    localStorage.setItem("usuariosAlmacenados", JSON.stringify(usuarios))
}

// Recupero de array de usuarios almacenados en localStorage

function recuperoUsuariosLS () {
    let usuariosLS = JSON.parse(localStorage.getItem("usuariosAlmacenados"));
    if (usuariosLS != null){
        if (usuariosLS.length > 0) {
            usuarios = Object.values(usuariosLS);
            console.log (usuarios);
        }
    }
}

// funciones para mensajes de alerta durante el registro y logueo

function mensajeAlerta () {
    Swal.fire({
        icon: 'warning',
        title: 'Campo Incompleto',
        text: 'Uno o mas campos no se han completado',
    })
}

function mensajeContraseñaNoCumple () {
    Swal.fire({
        icon: 'warning',
        title: 'Contraseña',
        text: 'Debe tener al menos 4 caracteres',
    })
}

function mensajeContraseñasNoCoinciden () {
    Swal.fire({
        icon: 'error',
        title: 'Contraseñas',
        text: 'Las contraseñas no coinciden',
    })
}

function mensajeUsuarioYaExiste () {
    Swal.fire({
        icon: 'error',
        title: 'Usuario existente',
        text: 'El email indicado ya esta registrado por otro usuario',
        footer: '<a href="./index.html">Desea volver al inicio</a>'
      })
}

function mensajeRegistroExitoso () {
    Swal.fire({
        title: 'Registro exitoso',
        text: "Su usuario se ha registrado correctamente",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'volver a inicio'
      }).then((result) => {
        if (result.isConfirmed) {
            location.href="./index.html"
        }
      })
}

// Despliegue del recupero de contraseña

let linkRecuperoContraseña = document.getElementById('recuperoContraseña')
linkRecuperoContraseña.addEventListener ('click', () => {
    console.log(`Acceso al recupero`)
    document.getElementById('container__login').style.display = 'none'
    document.getElementById('container__recuperoContraseña').style.background = 'black'
    document.getElementById('container__recuperoContraseña').style.border = '2px solid white'
    formularioRecuperoContraseña (linkRecuperoContraseña)
});

//Despliegue del formulario de recupero de contraseña

function formularioRecuperoContraseña () {
    let div = document.createElement ('div')
    div.className = 'recupero__registro'
    div.innerHTML = `<h3 class="recupero__titulo">Recupero de Contraseña</h3>
                    <input id="recupero__usuario" class="recupero__campos" type="email" name="usuario" value="" placeholder="Usuario / contraseña">
                    <input id="recupero__botonPregunta" class="recupero__botonPregunta" type="submit" value="Recuperar Contraseña">`
    containerRecupero.appendChild(div)
    cargarPreguntaSeguridad ()
};

function cargarPreguntaSeguridad () {
    let linkPreguntaSeguridad = document.getElementById('recupero__botonPregunta')
    linkPreguntaSeguridad.addEventListener ('click', cargaPregunta)
}

//funcion para recupero de pregunta de seguridad

function cargaPregunta (e) {
    e.preventDefault ()
    let usuarioRecupero = document.getElementById("recupero__usuario").value
    const verificacionUsuarioRecupero = usuarios.some ((usuario)=>usuario.mail == usuarioRecupero)
        if (verificacionUsuarioRecupero == true) {
            let usuarioRecuperado = usuarios.find(usuario=>usuario.mail == usuarioRecupero)
            let div = document.createElement('div')
            div.className = 'recupero__pregunta'
            div.innerHTML = `<h5 id="recupero__preguntaSeguridad" class="recupero__preguntaSeguridad">${usuarioRecuperado.preguntaSeguridad}</h5>
            <input id="recupero__respuestaSeguridad" class="recupero__campos" type="text" name="respuesta" value="" placeholder="Respuesta de seguridad">
            <input id="recupero__botonRespuesta" class="recupero__botonRespuesta" type="submit" value="Enviar Respuesta"></input>`
            containerRecupero.appendChild(div)
            verificarRespuestaSeguridad ()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Usuario no registrado',
            })
        }
}

function verificarRespuestaSeguridad () {
    let verificacionRespuestaSeguridad = document.getElementById('recupero__botonRespuesta')
    verificacionRespuestaSeguridad-addEventListener ('click', compararRespuesta)
}

function compararRespuesta (e) {
    e.preventDefault ()
    let usuarioRecupero = document.getElementById("recupero__usuario").value
    let respuestaIngresada = document.getElementById('recupero__respuestaSeguridad').value
    let usuarioRecuperado2 = usuarios.find(usuario=>usuario.mail == usuarioRecupero)
    if (respuestaIngresada == usuarioRecuperado2.respuestaSeguridad) {
        Swal.fire({
            title: 'Su contraseña es:',
            text: (usuarioRecuperado2.contraseña),
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'volver a inicio'
          }).then((result) => {
            if (result.isConfirmed) {
                location.href="./index.html"
            }
          })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Respuesta incorrecta',
        })
    }
}