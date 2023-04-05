/* crear programa para hallar el mayor de 3 numeros dados */
let num1, num2, num3;
    num1 = parseFloat(prompt("Ingresa el primer numero"));
    num2 = parseFloat(prompt("Ingresa el segundo numero"));
    num3 = parseFloat(prompt("Ingresa el tercer numero"));

    if (num1 > num2 && num1 > num3) {
        document.write("El primer numero: "+num1+" es el mayor");
    } else if (num2 > num1 && num2 > num3) {
        document.write("El segundo numero: "+num2+" es el mayor");
    } else if (num3 > num1 && num3 > num2) {
        document.write("El tercer numero: "+num3+" es el mayor");
    } else if (num1 === num2 && num1 > num3) {
        document.write("El primer numero: "+num1+" y segundo numero: "+num2+" son iguales y mayores que el tercero: "+num3);
    } else if (num1 === num3 && num1 > num2) {
        document.write("El primer numero: "+num1+ " y el tercer numero: "+num3+ " son iguales y son mayores que el segundo: "+num2);
    } else if (num2 === num3 && num2 > num1) {
        document.write("El segundo numero: "+num2+" y tercer numero: "+num3+ " son iguales y mayores que el primero: "+num1);
    } else {
        document.write("los tres numeros son iguales.");
    }