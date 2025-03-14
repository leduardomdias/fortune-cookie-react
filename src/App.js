import React, { Component } from "react";
import './style.css'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase : ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Hoje o universo vai te pegar... de jeito.', 'Sua sorte está tão baixa que nem um feitiço reverte.', 'A única coisa dura na sua vida é a realidade.', 'Prepare-se para uma noite inesquecível... de arrependimentos.', 'Seu futuro é quente... igual o inferno que te espera.', 'O destino te reserva surpresas... e todas são golpes.', 'Se a vida fosse um motel, você só pegava o quarto ruim.', 'Hoje você vai se dar bem... só que não.', 'Seu prazer hoje será igual Wi-Fi de hotel: fraco e instável.', 'A única coisa que vai te esquentar hoje é a vergonha alheia.'];
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }
  
  render(){
    return (
      <div className="container">
          <img src={require('./assets/biscoito.png')} className="img"/>
          <Botao  nome = "Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
          <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button className="btn" onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
