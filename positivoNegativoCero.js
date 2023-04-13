//Leer un numero entero y determinar si es positivo, negativo o si es cero
//Decisiones en secuencia
let numero;
    numero = parseInt(prompt("Ingrese un numero entero"));
    if (numero < 0) {
        document.write("El numero ingresado es negativo");
    }
    if (numero > 0) {
        document.write("El numero ingresado es positivo");
    }
    if (numero === 0) {
        document.write("El numero ingresado el cero");
    }