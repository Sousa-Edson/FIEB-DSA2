// Gera o Array
var montadoraArray = new Array(
  "Ford",
  "General Motors",
  "Honda",
  "Nissan",
  "Fiatd",
  "Renault",
  "Volkswagen"
);

// Obtem o seletor para impressão das informações
var montadoraHtml = document.querySelector(".montadoras");

var aux =""; // variável temporária

// Laço contendo os valores do array
for(var cont=0; cont < montadoraArray.length;cont++){
    aux+=montadoraArray[cont]+"<br>";
}
// apresenta no HTML conforme o seletor
montadoraHtml.innerHTML=aux;
