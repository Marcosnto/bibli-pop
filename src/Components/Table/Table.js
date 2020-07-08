import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const CellDeleta = ({ handleRemoveItem, id}) => {
  if (!handleRemoveItem) {
    return null
  }

  return (
    <TableCell>
      <Button variant="contained" color="primary" onClick={() => { handleRemoveItem(id) }}>Remover</Button>
    </TableCell>
  )
}

const TituloDeleta  = ({handleRemoveItem}) => {
  if (!handleRemoveItem) {
    return null
  }
  return <TableCell>Remover</TableCell>
}

const Tabela = (props) => {

  const { campos, dados, handleRemoveItem } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {
            campos.map((campo) => (
              <TableCell>{campo.titulo}</TableCell>
              ))
            }
            <TituloDeleta handleRemoveItem={handleRemoveItem} titulo/>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          dados.map(dado => {
            console.log(dados)
            return (
              <TableRow key={dado.id}>
                {
                  campos.map(campo => (
                    <TableCell>{dado[campo.dado]}</TableCell>
                  ))
                }
                <CellDeleta id={dado.id} handleRemoveItem={handleRemoveItem} />
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}
//autors={autors} handleRemoveItem={handleRemoveItem} /
export default Tabela;