var nome = "";

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("digita o nome");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;

/*fazr if em operador ternário
//cookies são informações que o navegador salva do usuario - servidor de proxy
// sessoes são cookies temporários - bancos ou qualquer coisa que tenha que logar de nvo depois de sair
//web storage - localStorage - salva as info no navegador do usuario (localmente-cooke)
//web storage - sessionStorage - salva as infos de forma temporária (sessions)

//no console*/
localStorage.setItem("nome", "fer");
localStorage.getItem("nome");
localStorage.removeItem("nome");
localStorage.nome = "fer";
localStorage.lista = ["Fer", 26];
localStorage.lista; //"Fer, 26"