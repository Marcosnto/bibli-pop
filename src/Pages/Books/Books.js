import React, { Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';
import Table from '../../Components/Table/Table';
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiServices';

class Books extends Component {

  constructor(props) {
    super(props);

    this.state = {
      livros: []
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
    const campos = [{titulo: 'Livros', dado: 'livro'}]
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col s12 autores">
              <h2 className="center titulo">Livros</h2>
              <Table 
              dados={this.state.livros} 
              campos={campos} 
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default Books;
