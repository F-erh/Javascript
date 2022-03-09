//some - verifica se tem algum do que estamos pedindo

const nomes = ["fer", "cascata", "cacau"];
nomes.some(nomes => nomes === "fer");
//true or false

//every - verifica se todos passam na condiçao
const nomes = [
    {nome: "fer", idade:26},
    {nome: "cascata", idade:4}
];
nomes.every(nome => nome.idade >= 30);
//true ou false

if (nomes.every(nome => nome.idade >= 30)){
    console.log('todos sao 18+'){

}else{
    console.log('opa, n é 18+')
    };
    