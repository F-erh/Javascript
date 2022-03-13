let varA = 'a' // b
let varB = 'b' // c
let varC = 'c'// a

/*const varATemp = varA
varA = varB
varB = varC
varC= varATemp

console.log(varA, varB, varC)*/

varA = varB
varB = varC
varC= varA

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)