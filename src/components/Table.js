import React, { Component } from "react"

const TableHead = () => {
  return (
    <tr>
      <th>Nome</th>
      <th>Livro</th>
      <th>Preço</th>
      <th>Remover</th>
    </tr>
  )
}

const TableBody = props => {
  console.log(props);
  const linhas = props.autors.map((autor, index) => {
    return (
      <tr key={index}>
        <td>{autor.nome}</td>
        <td>{autor.livro}</td>
        <td>{autor.preco}</td>
        <td><button className = "waves-effect waves-light btn indigo lighten-2"  onClick = { () => { props.handleRemoveItem(index) } }>Remover</button></td>
      </tr>
    )
  });

  return (
    <tbody>
      {linhas}
    </tbody>
  );
};

class Table extends Component {

  render() {

    const { autors, handleRemoveItem } = this.props;
    return (
      <table className = "centered highlight">
        <thead>
          <TableHead />
        </thead>
          <TableBody autors = { autors } handleRemoveItem = { handleRemoveItem } />
      </table>
    )
  }
}

export default Table;