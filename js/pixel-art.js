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

function crearPaleta() {
	for (let i=0; i < nombreColores.length; i++) {
		let nuevoDivColor = document.createElement('div');
		nuevoDivColor.style.backgroundColor= nombreColores[i];
		nuevoDivColor.className = 'color-paleta';
		miPaleta.appendChild(nuevoDivColor);
	}
}
crearPaleta();

function crearGrilla() {
	for (let i=0; i < 1750; i++) {
		let nuevoPixelGrilla = document.createElement('div');
		miGrillaPixeles.appendChild(nuevoPixelGrilla);
	}
}

crearGrilla();

function activarColorPaleta(e){
	document.getElementById('indicador-de-color').style.backgroundColor = e.target.style.backgroundColor;
}

miPaleta.addEventListener("click", activarColorPaleta);

function pintarUnPixel(e){
	e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
}
miGrillaPixeles.addEventListener("click", pintarUnPixel);

function alterarEstadoBotonMouse(e) {
	if (e.type == "mousedown") {
		botonDeMouseApretado = true;
	} 
	if (e.type == "mouseup") {
		botonDeMouseApretado = false;
	} 
}
window.addEventListener("mousedown", alterarEstadoBotonMouse);
window.addEventListener("mouseup", alterarEstadoBotonMouse);

function pintarConPincel(e){
	if (botonDeMouseApretado){
		e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
	}
}

miGrillaPixeles.addEventListener("mouseover", pintarConPincel);


let miBotonBorrar = document.getElementById('borrar');
miBotonBorrar.addEventListener("click", borrarGrilla);

function borrarGrilla(e){
	$("#grilla-pixeles").children().animate({"background-color": "#FFFFFF"}, 1000);
}


//-----------------------------------------------
//------------> ESTO FUNCIONA :-) <--------------
//-----------------------------------------------
function seleccionSuperheroe(e) {
	switch(e.target.id) {
	  case "batman":
		cargarSuperheroe(batman);
		break;
	  case "wonder":
		cargarSuperheroe(wonder);
		break;
	  case "flash":
		cargarSuperheroe(flash);
		break;
	  case "invisible":
		cargarSuperheroe(invisible);
		break;
	}
}
//-----------------------------------------------
	
//-----------------------------------------------
//---------> ESTO NO FUNCIONA :-( <--------------
//-----------------------------------------------
/*
function seleccionSuperheroe(e) {
	cargarSuperheroe(e.target.id);
}
*/
//-----------------------------------------------


let misSuperheroes = document.getElementsByTagName('img');
for (let i=0; i < misSuperheroes.length; i++) {
	misSuperheroes[i].addEventListener("click", seleccionSuperheroe);
}


let miBotonGuardar = document.getElementById('guardar');
miBotonGuardar.addEventListener("click", guardarPixelArt);
