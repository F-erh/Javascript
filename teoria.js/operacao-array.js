const lista = [1,2,3,4,5,6];
//map = percorre todo o vetor 

const nova = lista.map(function(item, index){
    return item * 5;
    return item + index;
});

console.log(nova);
[5,10,15,20,25,30]
console.log(nova);
[1,3,5,7,9,11]

const soma = lista.reduce(function(total, proximo){
    return total+proximo;
});

const find = lista.find(function(item){
    return item === 6;
});

console.log(find);