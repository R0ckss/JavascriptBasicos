let parcial1, parcial2, parcial3, promedio;
    parcial1 = parseFloat(prompt("Escriba la calificación del parcial 1"));
    parcial2 = parseFloat(prompt("Escriba la calificación del parcial 2"));
    parcial3 = parseFloat(prompt("Escriba la calificación del parcial 3"));

    promedio = (parcial1+parcial2+parcial3)/3;

    if (promedio >= 6) {
        document.write("El promedio es " + promedio + "<br>APROBADO");
    } else {
        document.write("El promedio es " + promedio + "<br>REPROBADO");
    }