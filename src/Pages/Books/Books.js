import React, { Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiServices';

class Books extends Component {

  constructor(props) {
    super(props);

    this.state = {
      livros: [],
      titulo: 'Livros'
    }
  }

  componentDidMount(){
    ApiService.ListaLivros()
      .then(res => {
        if (res.message === 'success'){
          PopUp.exibeMensagem("success", "Livros listados com sucesso")
          this.setState({livros: [...this.state.livros, ...res.data]})
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao Listar os livros"));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col s12 autores">
              <h2 className="center titulo">Livros</h2>
              <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default Books;
