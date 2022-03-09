const pessoa = {
    nome: "fer",
    cargo: "desenvolvedora"
}

let {nome} = pessoa
//fer

let {cargo} = pessoa
//desenvolvedora

let {nome, cargo} = pessoa;
// fer
//desenvolvedora

let {cargo:programadora} = pessoa
//programador

let nomes = ["fernanda", "cascata", "cacau", 10];

let { 1:dois } = nomes;

let { 0:um, 3:idade };

