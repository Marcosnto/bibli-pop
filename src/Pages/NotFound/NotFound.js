import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';

const NotFound = () => {

  return (
    <Fragment>

      <Header />
      <div className="container-fluid notFound">
        <div className="row mb0">
          <div className="col-12 msg">
            <ul className="center">
            <li><img src="/source.gif" width="480" height="360" alt="animação 404"/></li>
            <li><h1 style = {{color: "white"}}>Página não encontrada</h1></li>
            </ul>
          </div>
        </div>
      </div>

    </Fragment>

  )

}

export default NotFound;