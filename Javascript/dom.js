let resumenCompra = [];

const containerPeliculas = document.getElementById('container__peliculas');

const containerDias = document.getElementById('container__dias');

const containerCombos = document.getElementById('container__combos');

const formulario = document.getElementById ('formulario__registro');

const containerCompra = document.getElementById('container__compra');

const containerTamaños = document.getElementById('container__tamaños');


crearFunciones ();

crearFuncionesPorPeliculas (peliculas);

cargarPeliculas (peliculas);





