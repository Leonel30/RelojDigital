const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${sec} `;

    const meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getUTCDate();
    let mes = meses[fecha.getMonth()];
    let year = fecha.getFullYear();
    let textoFecha = `${diaSemana}, ${dia} de ${mes} de ${year}`;

    document.getElementById("fecha").innerHTML = textoFecha;

    let efecto = document.getElementById("contenedor");
    efecto.classList.toggle("animar")

}

const formatoHora = (hora) =>{
    if(hora < 10){
        hora = "0"+hora;
    }
    return hora;
}

setInterval(mostrarReloj,1000)