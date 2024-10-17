import React, { Component } from "react";

class Equipe extends Component {
  render() {
    return (
      <Sobre nome = {this.props.nome} cargo = {this.props.cargo} idade = {this.props.idade} />
    );
  }
}

class Sobre extends Component {
  render(){
    return(
      <div>
        <h2> Olá sou o(a) {this.props.nome} </h2>
        <h2> Cargo: {this.props.cargo} </h2>
        <h2> Idade: {this.props.idade} </h2>
        <hr/>
    </div> 
    );
  }
}

function App() {
  return (
    <div>
      <h1>Conheça nossa Equipe!</h1>
      <Equipe nome="Luis" cargo = "Dev Front" idade = "10"/>
      <Equipe nome="Rafa" cargo = "Design" idade = "13"/>
    </div>
  );
}

export default App;
