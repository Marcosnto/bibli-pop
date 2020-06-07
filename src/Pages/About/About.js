import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';

const About = () => {

  return (
    <Fragment>

      <Header />

      <div className="container">
        <div className="row">
          <div className="col s12 autores">
            <h2 className="center titulo">Sobre</h2>
            <p className="sobre">
              Projeto em ReactJS <br/>
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

export default About;