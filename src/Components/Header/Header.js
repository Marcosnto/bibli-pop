import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper menu">
        <LinkWrapper to="/" className="brand-logo">Biblioteca Popular</LinkWrapper>
        <ul className="right opcoes">
          <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
          <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
          <li><LinkWrapper to="/adicionar">Adicionar Novo</LinkWrapper></li>
          <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;