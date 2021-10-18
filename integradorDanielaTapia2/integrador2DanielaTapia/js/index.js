/*document.getElementById("hola").innerHTML = "Bienvenidos a DOM!";




function crearNota() {
    // modificación contenido html
    document.getElementById("nota").innerHTML = "Bienvenido DOM"

    document.getElementById("btnCrearNota").value = "BORRAR Nota"
    document.getElementById("btnCrearNota").onclick = borrarNota;

}

function borrarNota() {
    // modificación contenido html
    document.getElementById("nota").innerHTML = ""

    document.getElementById("btnCrearNota").value = "CREAR Nota"
    document.getElementById("btnCrearNota").onclick = crearNota;

}


// modifiación estilo css
function cambiarColorNota() {
    document.getElementById("nota").style.color = "blue";
}

//var x = document.getElementsByTagName("p");
//var x = document.getElementsByClassName("intro");
// var x = document.querySelectorAll("p.intro");
// document.getElementById("p2").style.color = "blue";
// buscar por nombre etiqueta
var listaP = document.getElementsByTagName("p");
console.log(listaP);

// buscar por nombre de clase
var listaClase = document.getElementsByClassName("textoPrincipal");
console.log(listaClase);

//animaciones

/** EVENTOS 
    suceso que ocurre en la ventada del navegador
*/
/*const btn = document.getElementById('btnEvento');
btn.onclick = function () {
    document.body.style.backgroundColor = "blue";
}

btn.onmouseover = function () {
    document.body.style.backgroundColor = "red";
}

btn.onmouseleave = function () {
    document.body.style.backgroundColor = "green";
}


const p = document.getElementById('mouserOver');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;
function logMouseOver() {
    p.innerHTML = 'MOUSE OVER detected';
    p.style.color = "red";
}

function logMouseOut() {
    p.innerHTML = 'MOUSE OUT detected';
    p.style.color = "blue";
}*/



function totalSummary(){

    let totalTickets = document.getElementById("tickets").value
    let precioTicket = 200 * totalTickets
    let category = document.getElementById("category").value

    if (category == document.getElementById("student").value) {

        let descuento = precioTicket * 80 / 100 
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("trainee").value){

        let descuento = precioTicket * 50 / 100 
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("junior").value) { 

        let descuento = precioTicket * 30 / 100 
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("default").value){ 

        let precioTicket = 200 * totalTickets
        let precioTotal = precioTicket

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`
    
    }
}

function deleteSummary(){

    document.getElementById("category").value = document.getElementById("default").value
    document.getElementById("name").value = ""
    document.getElementById("surname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("tickets").value = ""


    document.getElementById("total-summary").innerHTML = ""

}