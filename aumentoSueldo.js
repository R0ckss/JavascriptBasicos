/* crear programa que lea como dato el sueldo de un trabajador
aplique un aumento del 15% si el sueldo es inferior a $1000 y 
10% en caso contrario */
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