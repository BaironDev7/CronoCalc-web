document.getElementById("calcularButton").addEventListener("click", function () {
    const fecha1 = new Date(document.getElementById("fecha1").value);
    const fecha2 = new Date(document.getElementById("fecha2").value);

    const diasTotales = Math.floor((fecha2 - fecha1) / (1000 * 60 * 60 * 24));

    const finDeSemana = [0, 6];  // Para Domingo y Sábado

    let diasLaborables = 0;

    for (let i = 0; i <= diasTotales; i++) {
        const dia = new Date(fecha1);
        dia.setDate(fecha1.getDate() + i);
        if (!finDeSemana.includes(dia.getDay())) {
            diasLaborables++;
        }
    }

    if (diasLaborables < 50) {
        Swal.fire({
            text: "Menos de 50 días",
            icon: "info"
        });
    } else {
        Swal.fire({
            text: "Más de 50 días",
            icon: "success"
        });
    }
});
