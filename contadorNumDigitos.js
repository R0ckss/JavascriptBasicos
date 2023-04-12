//Leer un numero entero y determinar cuantos digitos tiene

let numero, contadorDigitos;
    numero = parseInt(prompt("Ingrese un numero entero para determinar cuantos digitos tiene"));
    contadorDigitos = 0;

    while (numero != 0) {
        numero = Math.floor(numero/10);
        contadorDigitos = parseInt(contadorDigitos + 1);
    }

    document.write("El numero ingresado tiene " +contadorDigitos+ " digitos");