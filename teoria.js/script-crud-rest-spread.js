function cadastro(usuarios, ...novos){
    let total = [
        ...usuarios,
        ...novos
    ];
    return console.log(total)
}
let usuarios = ["fer", "cascata", "cacau"];
let novos = cadastro(usuarios, "lola");

//... - simbolo do spread