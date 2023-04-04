//calcular la conversion de euros a dolares y pesos mexicanos

let euros, dolares, pesosmxn;

    euros = parseFloat(prompt("Ingrese la cantidad de euros que necesita convertir"));
        dolares = euros*1.08;
        pesosmxn = euros*19.61;

        alert(euros+ " € es quivalente a $"+dolares+" USD");
        alert(euros+ " € es equivalente a $"+pesosmxn+" MXN");
