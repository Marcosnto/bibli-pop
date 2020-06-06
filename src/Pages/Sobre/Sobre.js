import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';

const Sobre = () => {

  return (
    <Fragment>

      <Header />

      <div className="container">
        <div className="row">
          <div className="col s12 autores">
            <h1>Sobre</h1>
            <p>
              Projeto de ReactJS <br/>
              Feito por: Marcos Neto <br/>
              Curso: Alura - React JS <br/>
              Data: 04/06/2020 <br/>
            </p>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Sobre;