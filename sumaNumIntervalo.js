/* Crear programa para sumar los "n" numeros naturales dentro
de un intervalo, por ejemplo: Ingresando los valores 5 y 10,
entonces debe sumar lo siguiente: 5+6+7+8+9+10*/
let primerNumero, segundoNumero, resultado;
    primerNumero = parseInt(prompt("Ingresa el primer numero del intervalo para sumar los numeros entre ellos"));
    segundoNumero = parseInt(prompt("Ingresa el segundo numero del intervalo"));
    resultado = (segundoNumero - primerNumero + 1)*(primerNumero + segundoNumero)/2;
    document.write("La suma de todos los numero del intervalo entre "+ primerNumero + " y " + segundoNumero + " es " + resultado);