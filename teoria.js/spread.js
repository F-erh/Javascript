let primeiros = [1, 2 ,3];

let numeros = [4, 5, 6];

//juntar os dois com spread operator

let numeros = [...primeiros,4,5,6];
//[1,2,3,4,5,6]

let pessoa = {
    nome: "fer",
    idade: 26,
    cargo: "programadora"
};

let novapessoa = {
    ...pessoa,
    ano: 2022,
};