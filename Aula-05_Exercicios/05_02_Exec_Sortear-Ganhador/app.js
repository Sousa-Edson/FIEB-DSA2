
var lista_nome = new Array;
function adicionarNome() {
    var nome = document.getElementById("txt_nome").value;  // pegar valor do campo
    var lista = document.getElementById("lista");
    var ganhador = document.getElementById("ganhador");
    var vermelha = document.getElementById("msg_vermelha"); 
    var botao = document.getElementById("btn_incluir");
    if (nome.length > 0) {

        lista_nome.push(nome)
        // lista.innerHTML = null;
        var aux = '';
        vermelha.innerHTML = '';
        for (var i = 0; i < lista_nome.length; i++) {
            // console.log(lista_nome[i]);
            aux += "<li>" + [i + 1] + "° Nome: " + lista_nome[i] + "</li>";
        }
        console.log(lista_nome);
        lista.innerHTML = aux;


        if (lista_nome.length >= 5) {
            var r= Math.floor( Math.random() * (4+ 1 - 1) + 1);
            ganhador.innerHTML = 'O ganhador foi o : '+lista_nome[r] +"  ";
            botao.disabled = true;
            botao.style.backgroundColor ="gray";
           
        }
    }
    else {
        vermelha.innerHTML = 'Não deixe em branco!';
    }
    document.getElementById("txt_nome").value = ''; 
    document.getElementById("txt_nome").focus();


    //  lista += "<li>"+nome+"</li>";
    // document.getElementById("lista").innerHTML = "<p>" + nome + "</p><br>";
    // lista.appendChild(nome);

}