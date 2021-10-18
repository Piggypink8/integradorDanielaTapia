/*Función para tomar los datos ingresados y dar el valor total teniendo en cuenta la categoría y cantidad*/

function totalSummary() {

     //Variable para tomar la cantidad ingresada de tickets.
    let totalTickets = document.getElementById("tickets").value
    
    //Variable para crear el valor del ticket según la cantidad.
    let precioTicket = 200 * totalTickets
    
    //Variable para tomar la categoría seleccionada.
    let category = document.getElementById("category").value

    //Condición para evaluar la categoría y aplicar el descuento en el total según la selección.
    if (category == document.getElementById("student").value) {

        let descuento = precioTicket * 80 / 100
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("trainee").value) {

        let descuento = precioTicket * 50 / 100
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("junior").value) {

        let descuento = precioTicket * 30 / 100
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("default").value) {

        let precioTicket = 200 * totalTickets
        let precioTotal = precioTicket

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    }
}

// Eliminar datos ingresados y el total en resumen.

function deleteSummary() {

    //Tomamos los valores ingresados y aplicamos un nuevo valor sin contenido.
    document.getElementById("category").value = document.getElementById("default").value
    document.getElementById("name").value = ""
    document.getElementById("surname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("tickets").value = ""


    document.getElementById("total-summary").innerHTML = ""

}

}
