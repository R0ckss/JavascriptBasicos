/* Crear un programa para solucionar lo siguiente:
En una tienda se ofrece un descuento fijo del 15% del monto
de la compra de ciertos productos, determine el monto
del descuento y el monto a pagar por la compra de cierta
cantidad de unidades del producto */
let cantidad, precio, descuento, compra, pagar;
    precio = parseFloat(prompt("Ingresar el precio del producto"));
    cantidad = parseInt(prompt("Ingresar la cantidad de productos"));

    compra = precio*cantidad;
    descuento = compra*0.15;
    pagar = compra - descuento;

    document.write("Son " + cantidad + " productos a $" + precio + " cada uno.");
    document.write("<br>El importe total de compra es de $" + compra+".");
    document.write("<br>El monto total a pagar es de: $" + pagar + " aplicando el 15% de descuento que son: $" + descuento+".");