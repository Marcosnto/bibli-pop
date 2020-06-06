import React from 'react';
/* 
  Aqui é centralizado o NavLink para fazer a linkagem de páginas.is-success
  É uma boa prática porque caso a lib venha a mudar ou a parar de funcionar
  fica fácil sua alteração. 
*/

import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {
    return (
      <NavLink activeStyle={{fontWeight: "bold"}} {...props}/>
    );
}

export default LinkWrapper;