var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.webp";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", cargarFondo);

var vaca = new Image();
vaca.src = "vaca.webp";
vaca.addEventListener("load", cargarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", cargarPollos);

function cargarFondo()
{
    papel.drawImage(fondo, 0, 0);
}

function cargarVacas()
{
    papel.drawImage(vaca, 200, 80);
    var x = aleatorio(0, 420);
    var y = aleatorio(0, 420);
    papel.drawimage(vaca.imagen, x, y);
}

function cargarCerdos()
{
    papel.drawImage(cerdo, 10, 200);
}

function cargarPollos()
{
    papel.drawImage(pollo, 310, 100);
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.ceil(Math.random() * (max - min + 1)) + min;
    return resultado;
}