import React, { Component } from 'react';
import FormValidator from '../../utils/FormValidator';
import PopUp from '../../utils/PopUp';

/* 
  Formulário com tramento de erro para os campos
  utilizando a lib Validator, a qual traz várias 
  especificações para cada tipo de input
*/


class Form extends Component {

  constructor(props) {
    super(props);

    this.stateInitial = {
      nome: '',
      livro: '',
      preco: '',
    }

    this.validador = new FormValidator([
      {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um nome'
      },
      {
        campo: 'livro',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um livro'
      },
      {
        campo: 'preco',
        metodo: 'isInt',
        args: [{ min: 0, max: 99999 }],
        validoQuando: true,
        mensagem: 'Entre com um valor numérico'
      },
    ]);

    this.stateInitial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.validador.valido()
    }

    this.state = this.stateInitial;
  }

  submitForm = () => {
    const validacao = this.validador.valida(this.state);

    if (validacao.isValid) {
      this.props.handleAddAutor(this.state);
      this.setState(this.stateInitial);
    }else{
      const {nome, livro, preco} = validacao;
      const campos = [nome, livro, preco];
      console.log(campos);
      const camposInvalidos = campos.filter(elemento => {
        return elemento.isInvalid;
      });

      camposInvalidos.forEach(campo => {
          PopUp.exibeMensagem('error', campo.message);
      });
    }
  }
  
  listeningInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {

    const { nome, livro, preco } = this.state;

    return (
      <form action="">
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="nome"> Nome </label>
            <input className="validate" id="nome" type="text" name="nome" value={nome} onChange={this.listeningInput} />
          </div>

          <div className="input-field col s4">
            <label className="input-field" htmlFor="livro"> Livro </label>
            <input className="validate" id="livro" type="text" name="livro" value={livro} onChange={this.listeningInput} />
          </div>

          <div className="input-field col s4">
            <label className="input-field" htmlFor="preco"> Preço </label>
            <input className="validate" id="preco" type="text" name="preco" value={preco} onChange={this.listeningInput} />
          </div>
          <button className="waves-effect waves-light btn indigo lighten-2" type="button" onClick={this.submitForm}>Salvar</button>
        </div>
      </form>
    )
  }
}

export default Form;