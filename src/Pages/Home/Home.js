import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.scss'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Tabela/Table'
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiServices'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autors: [],
    }
  }

  handleRemoveItem = id => {
    
    const { autors } = this.state;

    const autoresAtualizados = autors.filter(autor => {
      return autor.id !== id;
    });

    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ autors: [...autoresAtualizados] });
          PopUp.exibeMensagem("success", "Autor Removido com sucesso");
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao remover o usuario"));
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autors: [...this.state.autors, ...res.data] })
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao Listar os usuarios"));
  }

  render() {
    
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h2 className="center titulo">Acervo</h2>
          <Table autors={this.state.autors} handleRemoveItem={this.handleRemoveItem} />
        </div>
      </Fragment>
    );
  }
}

export default Home;
