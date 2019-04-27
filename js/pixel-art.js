var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

// variable global que indica un valor verdadero o falso segun el mouse este o no apretado
let botonDeMouseApretado;

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
	document.getElementById('indicador-de-color').style.backgroundColor = colorActual;

  })
);


let miPaleta = document.getElementById('paleta');
let miGrillaPixeles = document.getElementById('grilla-pixeles');

//  crea la paleta de colores a partir de la lista de colores del array nombreColores
function crearPaleta() {
	for (let i=0; i < nombreColores.length; i++) {
		let nuevoDivColor = document.createElement('div');
		nuevoDivColor.style.backgroundColor= nombreColores[i];
		nuevoDivColor.className = 'color-paleta';
		miPaleta.appendChild(nuevoDivColor);
	}
}
// invoca funcion que esta aca arriba
crearPaleta();

// crea la grilla que funciona como lienzo para las obras de arte compuesta de 1750 pixeles
function crearGrilla() {
	for (let i=0; i < 1750; i++) {
		let nuevoPixelGrilla = document.createElement('div');
		miGrillaPixeles.appendChild(nuevoPixelGrilla);
	}
}
// invoca funcion que esta aca arriba
crearGrilla();

// le otorga al indicador de color el seleccionado segun el click sobre la paleta de colores
function activarColorPaleta(e){
	document.getElementById('indicador-de-color').style.backgroundColor = e.target.style.backgroundColor;
}
// detecta el evento de click sobre los colores de la paleta y dispara la funcion para indicarlo en el selector de color
miPaleta.addEventListener("click", activarColorPaleta);

// segun el click detectado le asigna a ese pixel del lienzo el color activo de la paleta en ese momento
function pintarUnPixel(e){
	e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
}
// detecta los eventos de click de mouse sobre la grilla del lienzo y llama la funcion de pintar el pixel donde ocurrio el click
miGrillaPixeles.addEventListener("click", pintarUnPixel);

// altera el valor de la varible global que indica si el boton de mouse esta apretado o no segun el evento que este ocurriendo en ese momento
function alterarEstadoBotonMouse(e) {
	if (e.type == "mousedown") {
		botonDeMouseApretado = true;
	} else if (e.type == "mouseup") {
		botonDeMouseApretado = false;
	} 
}

//detecta los eventeos de apretar y de soltar el boton del mouse en cualquier lugar de la ventana del pixelart
window.addEventListener("mousedown", alterarEstadoBotonMouse);
window.addEventListener("mouseup", alterarEstadoBotonMouse);

// Permite pintar trazos a partir de asignarle el color activo de la paleta a los pixeles del lienzo por donde pasa el mouse siempre y cuando el boton de mouse este apretado
function pintarConPincel(e){
	if (botonDeMouseApretado){
		e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
	}
}
// detecta el evento de pasar el mouse por sobre los pixeles de la grilla o lienzo
miGrillaPixeles.addEventListener("mouseover", pintarConPincel);

// limpia el lienzo (pasa a blanco cada pixel) a partir de un click en boton borrar y lo hace mediante una animacion de JQuery para que esto ocurra con una especie de fade
function borrarGrilla(e){
	$("#grilla-pixeles").children().animate({"background-color": "#FFFFFF"}, 1500);
}

// detecta el click sobre el boton borrar y llama a funcion que vuelve a blanco todos los pixeles del lienzo
let miBotonBorrar = document.getElementById('borrar');
miBotonBorrar.addEventListener("click", borrarGrilla);

// carga sobre el lienzo el superheroe cuya imagen haya sido clickeada
function seleccionSuperheroe(e) {
	cargarSuperheroe(window[e.target.id]);
}

// asigna un listener del tipo click a cada una de la imagenes de supeheroes disponibles para cargar
let misSuperheroes = document.getElementsByTagName('img');
for (let i=0; i < misSuperheroes.length; i++) {
	misSuperheroes[i].addEventListener("click", seleccionSuperheroe);
}

// detecta click sobre el boton guardar y llama a la funcion que realiza la accion de guardar en disco la obra de arte
let miBotonGuardar = document.getElementById('guardar');
miBotonGuardar.addEventListener("click", guardarPixelArt);