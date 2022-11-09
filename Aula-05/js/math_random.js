var aleatorio = document.querySelector('.aleatorio');// obtem o seletor do campo
var valores = new Array(); // cria o array
var max = 10, min = 1; // valores minimo e maximo a ser gerados
var aux = ""; //temporario
for(cont=0;cont<10;cont++){
    // valores[cont] = Math.random()*max+1;

    // valores[cont] =Math.floor(Math.random()*max);
    // valores[cont] =Math.floor(Math.random()*(max - min)+min);
    valores[cont] =Math.floor(Math.random()*(max+1 - min)+min); ;// incluir o numero maximo
}
for(cont=0;cont<valores.length;cont++){
aux += (cont+1)+" ==> "+valores[cont]+"<br>"
}
aleatorio.innerHTML = "Números aleatórios gerados <br> "+aux;