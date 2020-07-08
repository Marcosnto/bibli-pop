import React, { Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Table/Table'
import ApiService from '../../utils/ApiServices';
import PopUp from '../../utils/PopUp';

class Authors extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
    }
  }

  componentDidMount(){
    ApiService.ListaNomes()
      .then(res => {
        if (res.message === 'success'){
          PopUp.exibeMensagem("success", "Autores listados com sucesso")
          this.setState({nomes: [...this.state.nomes, ...res.data]})
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao Listar os Autores"));
  }

  render() {
    const campos = [{titulo: 'Autores', dado: 'nome'}]
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col s12 autores">
              <h2 className="center titulo">Autores</h2>
              <Tabela 
              dados={this.state.nomes} 
              campos={campos} 
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default Authors;
