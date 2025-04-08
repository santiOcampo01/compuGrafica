document.addEventListener("DOMContentLoaded", function() {
    const botonCalcular = document.getElementById('calculate')
    const botonLimpiar = document.getElementById("clear");
    const text = document.getElementById('resultList')

    botonCalcular.addEventListener('click', calcularAños)
    botonLimpiar.addEventListener('click', limpiarCampos);


    function calcularAños() {
        let añoMenor = parseInt(document.getElementById("añosMenor").value);
        let añoMayor = parseInt(document.getElementById("añosMax").value);

        if (isNaN(añoMenor) || isNaN(añoMayor) || añoMenor < 0 || añoMayor < 0) {
            text.textContent = "Por favor, ingrese años válidos.";
            return;
        }

        if (añoMenor > añoMayor) {
            text.textContent = "El año menor no puede ser mayor que el año mayor.";
            return;
        }   

        let añoBisiesto = '';

        for (let i = añoMenor; i <= añoMayor; i++) {
            if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
                añoBisiesto += i + ", ";
            }
        }
        if (añoBisiesto.length > 0) {
            añoBisiesto = añoBisiesto.slice(0, -2); // Eliminar la última coma y espacio
            text.textContent = "Los años bisiestos entre " + añoMenor + " y " + añoMayor + " son: " + añoBisiesto;
        } else {
            text.textContent = "No hay años bisiestos entre " + añoMenor + " y " + añoMayor + ".";
        }
    }

    function limpiarCampos() {
        document.getElementById("añosMenor").value = "";
        document.getElementById("añosMax").value = "";
        text.textContent = ""; // Limpiar el contenido del elemento de texto
    }

});

