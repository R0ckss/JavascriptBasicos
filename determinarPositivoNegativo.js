/* Leer un numero entero y determinar si es positivo o negativo.
Si es positivo determinar si tiene dos digitos y si es negativo
determinar si tiene tres digitos.
Asumir que no puede entrar el numero cero*/
//Decisiones anidadas

let numero;
    numero = parseInt(prompt("Ingrese un numero entero"));
    if (numero > 0) {
        if (numero >= 10 && numero <= 99) {
            document.write("El numero es positivo y tiene 2 digitos");
        } else {
            document.write("El numero es positivo y no tiene dos digitos");
        }
        
    } else {
        if (numero >= -999 && numero <= -100) {
            document.write("El numero es negativo y tiene tres digitos");
        } else {
            document.write("El numero es negativo y no tiene tres digitos");
        }
    }