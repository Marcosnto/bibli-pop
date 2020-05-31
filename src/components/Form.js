import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.stateInitial = {
      nome: '',
      livro: '',
      preco: '',
    }

    this.state = this.stateInitial;
  }

  listeningInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  submitForm = () => {
    this.props.handleAddAutor(this.state);
    this.setState(this.stateInitial);
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
          <button className = "waves-effect waves-light btn indigo lighten-2" type="button" onClick={this.submitForm}>Salvar</button>
        </div>
      </form>
    )
  }
}

export default Form;