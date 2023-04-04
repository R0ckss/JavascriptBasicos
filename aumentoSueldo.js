let sueldo, aumento, nuevoSueldo;
    sueldo = parseFloat(prompt("Ingrese la cantidad del sueldo: "));

    if (sueldo < 1000) {
        aumento = sueldo * 0.15;
    } else {
        aumento = sueldo * 0.10;
    }

    nuevoSueldo = sueldo + aumento;
    document.write("Sueldo actual: $"+sueldo);
    document.write("<br>Aumento: $"+aumento);
    document.write("<br>Nuevo Sueldo: $"+nuevoSueldo);