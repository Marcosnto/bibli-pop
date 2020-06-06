import React, { /* useState, */ Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Tabela/Table'
import Form from '../../Components/Formulario/Form'
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiServices'

// Função só para utilizar o State da forma mais atual
// function CountClik(){
//   const [counter, setCounter] = useState(0);

//   return(
//     <div>
//       <button onClick = { () => setCounter(counter +1) }>Clique aqui</button>
//       <h2>Você clicou: {counter} vezes</h2>
//     </div>
//   );
// }


class App extends Component {

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

  handleAddAutor = autor => {
    ApiService.CriarAutor(autor)
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autors: [...this.state.autors, autor] });
          PopUp.exibeMensagem("success", "Autor Adicionado com Sucesso");
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao adicionar o usuario"));
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
          <h1>Casa do Código</h1>
          <Table autors={this.state.autors} handleRemoveItem={this.handleRemoveItem} />
          <div>
            <Form handleAddAutor={this.handleAddAutor} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
