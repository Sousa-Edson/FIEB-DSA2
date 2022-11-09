// adicionar um escutador de eventos
var titulo = document.querySelector(".titulo");
// chamando a função
titulo.addEventListener("click", msg);
// função
function msg() {
    alert("Opa click ok");
}
/* segunda parte */

// Incluir evento no botão
var botao = document.querySelector("#btnClick");

// preventDefault não permite o comportamento padrão que é recarregar a paginae enviar o form

botao.addEventListener("click", function (esteEvento) {
    esteEvento.preventDefault(); //Desativar o evento 
    alert("click ok");
    botao.style.color = "white";
    botao.style.backgroundcolor = "gray";
    botao.textContent = "Botão foi clicado";
    valorQualquer.value = "";
    botao.disabled = true;
    valorQualquer.disabled = true;
});