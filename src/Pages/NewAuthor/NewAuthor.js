import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import ApiService from '../../utils/ApiServices';
import PopUp from '../../utils/PopUp';

const handleAddAutor = autor => {
  ApiService.CriarAutor(autor)
    .then(res => {
      if (res.message === 'success') {
        PopUp.exibeMensagem("success", "Autor Adicionado com Sucesso");
      }
    })
    .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao adicionar o usuario"));
}

const NewAuthor = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Form handleAddAutor={handleAddAutor} />
      </div>
    </Fragment>
  );
}

export default NewAuthor;