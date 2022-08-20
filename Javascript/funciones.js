/*const mostrarPeliculas = () => {
   let mensaje = "Seleccione que pelicula desea ver:"
   peliculas.forEach (pelicula =>{
    mensaje += `
    - ${pelicula.id}: ${pelicula.titulo} - ${pelicula.genero} - Clas.: ${pelicula.clasificacion}`
   })
    let opcion = Number (prompt(mensaje))
    return opcion;
}

const entradas = () => {
    let mensaje = "Cuantas entradas desea comprar?"
    let cantidadEntradas = Number (prompt (mensaje))
    return cantidadEntradas;
}

const mostrarCombos = () => {
    let mensaje = "Desea comprar alguno de nuestros combos?:"
    combos.forEach (combo =>{
        mensaje += `
        - ${combo.id}: ${combo.descripcion} - Precio: $ ${combo.precio}`
    })
    mensaje += `
        - 0: No comprar`
    let seleccion = Number (prompt(mensaje))
    return seleccion;
}

const mostrarTamaños = () => {
    let mensaje = "De que tamaño desea su combo?"
    tamaños.forEach (tamaño =>{
        mensaje += `
        - ${tamaño.id}: ${tamaño.especificacion}`
    })
    let eleccion = Number (prompt(mensaje));
    return eleccion;
}

const resumenCombos = () => {
    let mensajeResumen = "";
    compraCombos.forEach (comboSeleccionado =>{
        mensajeResumen += `
        - ${comboSeleccionado.descripcion} - ${comboSeleccionado.tamaño} - $ ${comboSeleccionado.precio * comboSeleccionado.factorModificador}`
    })
    mensajeResumen += `
        - Total combos: $${compraCombos.reduce((total,comboSeleccionado)=>total + (comboSeleccionado.precio * comboSeleccionado.factorModificador),0)}`
    alert (mensajeResumen)
}
const resumenCompra = () => {
    let mensajeResumenCompra = "";
    compra.forEach (peliculaElegida => {
        mensajeResumenCompra += `
        Su compra quedo conformada de la siguiente forma:
        - Pelicula seleccionada: ${peliculaElegida.titulo}
        - Cantidad de entradas: ${peliculaElegida.entradas}
            - Total entradas : $ ${peliculaElegida.costoEntradas}
        Combos:`
    compraCombos.forEach (comboSeleccionado =>{
        mensajeResumenCompra += `
        - ${comboSeleccionado.descripcion} - ${comboSeleccionado.tamaño} - $ ${comboSeleccionado.precio * comboSeleccionado.factorModificador}`
    })
    mensajeResumenCompra += `
            - Total combos: $${compraCombos.reduce((total,comboSeleccionado)=>total + (comboSeleccionado.precio * comboSeleccionado.factorModificador),0)}`
})
    alert (mensajeResumenCompra)
}*/


