import React from 'react';

/* 
  Tábela genérica, na qual é possível
  criar uma através dos parâmetros passados
*/

const DataTable = props => {

  let linhas = props.dados.map((item) =>
    <tr key={item.id}>
      {props.colunas.map((coluna) =>
        <td key={`${item.id}${item[coluna]}`}>{item[coluna]}</td>)}
    </tr>);


  return (
    <table className='centered highlight'>
      <thead>
        <tr>
          <th>{props.titulo}</th>
        </tr>
      </thead>
      <tbody>
        {linhas}
      </tbody>
    </table>
  );

}
export default DataTable;