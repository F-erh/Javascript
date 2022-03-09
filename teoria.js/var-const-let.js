/*var nome = "fer";
nome //"fer"

let sobrenome = "gaspar"
sobrenome //"gaspar"*/

if(nome == "fer"){
    var idade = 26;
    console.log("tem"+idade);
}

if (nome == "fer"){
    let sobrenome = "gaspar";
    console.log("fer "+sobrenome);
}

//let acessa apenas no escopo que foi criado, não pode acessar fora - dá como indefinida
//var pode acessar de qualquer lugar

var lista = [1,2,3];
for(var i in lista){
    console.log(lista[i]);
}

for(let b in lista){
    console.log(lista[b]);
}

let nome = "fer";
var idade = 26;

if(idade == 26){
    console.log(nome);
}

//const é uma variavel imutavel - constante, não variavel

const nome = "cascata"
nome //"cascata"

