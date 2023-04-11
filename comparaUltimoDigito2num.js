let numero1, numero2, ultimoDig1, ultimoDig2;

    numero1 = parseInt(prompt("Ingrese el primer numero a comparar"));
    numero2 = parseInt(prompt("Ingrese el segundo numero a comparar"));

    if (numero1 < 0) {
        numero1 = numero1 * (-1);
    }

    if (numero2 < 0) {
        numero2 = numero2 * (-1);
    }

    ultimoDig1 = numero1 - Math.floor(numero1/10)*10;
    ultimoDig2 = numero2 - Math.floor(numero2/10)*10;
    if (ultimoDig1 === ultimoDig2) {
        document.write("El ultimo digito de ambos numeros son iguales")
    } else {
        document.write("El ultimo digito de ambos numeros son diferentes");
    }