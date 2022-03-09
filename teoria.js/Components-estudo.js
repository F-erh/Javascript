/*ReactJS nós temos 2 principais tipos de componentes: Componentes com Estados e Componentes sem Estados:
StateLess e StateFull:
StateFull: possui atributos que poderão ter o seu valor alterado, e a cada alteração, 
impactarão diretamente na renderização do componente.

StateLess: são componentes mais simples, que quase sempre só servem para renderizar uma responsabilidade 
pequena de nossa página.

Outra diferença muito importante é a forma como estes componentes são escritos.

Um componente com estados quase sempre vai ser representado, de fato, por uma classe, por exemplo:

import React, { Component } from "react";
 
class App extends Component {
  render() {
    return(
    <h1>Olá ReactJS</h1>
    );
  }
}
 
export default App;
Note que para este componente nós temos obrigatoriamente que utilizar o método render() pois ele será o responsável por colocar e recolocar as informações na tela.

Mas, EXATAMENTE o mesmo componente, poderia ser escrito da seguinte forma:

import React from "react";
 
const App = () => {
  return( 
    <h1>Olá ReactJS</h1>
  );
};
 
export default App;

OBS: 
{ } - OBJETO
" " - STRING
(()=>) - função anonima
*/