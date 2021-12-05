(function() {    

    setInterval(() => {

        // Crear un nuevo objeto de tipo Day 
        let dayNow = new Date();

        // Declarar los datos Reloj
        let hora = document.getElementById("hora");
        let minutos = document.getElementById("minutos");
        let segundos = document.getElementById("segundos");
        let parpadeo = document.getElementById("mostrarOcultar");
        let amPm = document.getElementById("amPm");

        // Fecha
        document.getElementById("dia").innerHTML = dayNow.getDate();

        // Para el mes
        let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        document.getElementById("mes").innerHTML = mes[dayNow.getMonth()];

        document.getElementById("year").innerHTML = dayNow.getFullYear();
        
        // Colocar los datos en su lugar
        // Hora
        hora.innerHTML = dayNow.getHours();
        if (dayNow.getHours() > 12) {
            hora.innerHTML = dayNow.getHours() - 12;
            amPm.innerHTML = "PM";
        }

        // Minutos
        minutos.innerHTML = dayNow.getMinutes();

        if (dayNow.getMinutes() < 10) {
            minutos.innerHTML = "0" + dayNow.getMinutes();
        }

        // Segundos
        segundos.innerHTML = dayNow.getSeconds();
        if (dayNow.getSeconds() < 10) {
            segundos.innerHTML = "0" + dayNow.getSeconds();
        }

        // Parpaderar en el intervalo
        if (parpadeo.style.color != "transparent"){
            parpadeo.style.color = "transparent";

        } else {
            parpadeo.style.color = "#fff";
        }

    }, 500);

}());