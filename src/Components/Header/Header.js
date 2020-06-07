import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper menu">
        <LinkWrapper to="/" className="brand-logo">Biblioteca Popular</LinkWrapper>
        <ul className="right opcoes">
          <li><LinkWrapper to="/authors">Autores</LinkWrapper></li>
          <li><LinkWrapper to="/books">Livros</LinkWrapper></li>
          <li><LinkWrapper to="/newauthor">Adicionar Novo</LinkWrapper></li>
          <li><LinkWrapper to="/about">Sobre</LinkWrapper></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;