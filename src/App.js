import React, { /* useState, */ Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import Form from './components/Form'


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

  state = {
    autors: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Pedrinho',
        livro: 'Alice',
        preco: '888'
      }],
  };

  handleRemoveItem = index => {

    const { autors } = this.state;

    this.setState({
      autors: autors.filter((autor, currectPos) => {
        return currectPos !== index;
      }),
    });
  }

  handleAddAutor = data => {

    this.setState({ autors: [...this.state.autors, data] })

  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
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
