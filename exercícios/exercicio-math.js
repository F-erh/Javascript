let numero = prompt('digite um numero')
numero = Number(numero)
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>seu numero -2 é ${numero-2} </p>`;
texto.innerHTML += `<p>${numero} é inteiro; ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>arredondando p baixo é ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>arredondando p cima é ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>duas casas decimais ${numero.toFixed(2)} </p>`;