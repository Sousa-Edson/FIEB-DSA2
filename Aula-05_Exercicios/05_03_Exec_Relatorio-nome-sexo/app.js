
var pessoa = [];
var pessoas = [];

const vermelha = document.getElementById("msg");
const lista = document.getElementById("lista");

const btnIncluir = document.getElementById("Incluir");
const btnRelatorio = document.getElementById("Relatorio");

function relatorio() {
    pessoas = [];
    var vSexo = document.getElementsByName('sexo');  // pegar valor do campo
     
        for (i = 0; i < vSexo.length; i++) {
            if (vSexo[i].checked) {
                vSexo = vSexo[i].value;
            }
        }
        console.log(vSexo);
        console.log(pessoa);
        for (i = 0; i < pessoa.length; i++) {
            if(pessoa[i].sexo == vSexo){
                pessoas += " <li><span>" + pessoa[i].nome + "</span>   </li>"
            }
        }
        lista.innerHTML = '';
        lista.innerHTML = "<p><span>"+vSexo+"</span></p><ul>" + pessoas.valueOf() + "</ul>";

     
}

function incluir() {
    pessoas = [];
    vermelha.innerHTML = ' ';
    var vNome = document.getElementById('nome').value;  // pegar valor do campo
    var vSexo = document.getElementsByName('sexo');  // pegar valor do campo

    if (vNome.length > 0) {
        for (i = 0; i < vSexo.length; i++) {
            if (vSexo[i].checked) {
                vSexo = vSexo[i].value;
            }
        }
        pessoa.push({ nome: vNome, sexo: vSexo });
        console.log(pessoa);
        for (i = 0; i < pessoa.length; i++) {
            pessoas += " <li><span>" + pessoa[i].nome + "</span> <span>" + pessoa[i].sexo + "</span></li>"
        }
        // lista.innerHTML = '';
        lista.innerHTML = "<ul>" + pessoas.valueOf() + "</ul>";
    } else {
        vermelha.innerHTML = 'Não deixe em branco!';
    }
    document.getElementById("nome").value = '';
    document.getElementById("nome").focus();
    contagem();
}
function contagem() {
    btnIncluir.disabled = true;
    btnRelatorio.disabled = true;
    btnIncluir.style.backgroundColor = "gray";
    btnRelatorio.style.backgroundColor = "gray";
    btnRelatorio.style.color = "white";
    btnIncluir.style.color = "white";
    if (pessoa.length < 5) {
        btnIncluir.disabled = false;
        btnIncluir.style.backgroundColor = null;
        btnIncluir.style.color = "black";
    } else {

        btnRelatorio.disabled = false;
        btnRelatorio.style.backgroundColor = null;
        btnRelatorio.style.color = "black";
    }

}