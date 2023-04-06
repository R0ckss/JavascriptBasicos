//Ingresar un numero y determinar si es par o no
let numero;
    numero = parseInt(prompt("Ingrese el numero para determinar si es par"));
    if (numero < 0) {
        document.write("El numero debe ser positivo");
    } else {
        if (numero % 2 === 0) {
            document.write("El numero leido es par");
        } else {
            document.write("El numero leido no es par");
        }
    }