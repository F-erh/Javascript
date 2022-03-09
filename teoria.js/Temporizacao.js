function acao(){
    document.write("executando...<br/>");
}

//executa de tempo em tempo
var timer = setInterval(acao, 1000);
<button onClick={clearInterval(timer)}>Para timer</button>
//espera para executar
setTimeout(acao, 3000);

