/* Leer un numero entero y determinar si es de uno, dos, tres o cuatro digitos 
Validar que el numero no sea negativo*/
//Decisiones en cascada

let numeroEntero;
    numeroEntero = parseInt(prompt("Ingrese un numero entero por favor"));
    if (numeroEntero < 0) {
        numeroEntero = numeroEntero * (-1);
    }
    if (numeroEntero >= 1 && numeroEntero <= 9) {
        document.write("El numero tiene 1 digito");
    } else if (numeroEntero >= 10 && numeroEntero <= 99) {
        document.write("El numero tiene 2 digitos");
    } else if (numeroEntero >=100 && numeroEntero <= 999) {
        document.write("El numero tiene 3 digitos");
    } else if (numeroEntero >= 1000 && numeroEntero <= 9999) {
        document.write("El numero tiene 4 digitos");
    } else {
        document.write("El numero tiene mas de 4 digitos");
    }{
        
    }{
        
    }{
        
    }
