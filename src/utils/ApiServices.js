/*
  Aqui estão centralizadas as chamadas da API 
  juntamente com o tratamento de erros, os quais também
  estão tendo seu tratamento centralizado, passando diretamente
  a mensagem de erro ou sucesso. 
*/

const ApiService = {

  ListaAutores: () => {
    return fetch('http://localhost:8000/api/autor')
    .then(res => ApiService.TrataErros(res))
    .then(res => res.json());
  },

  CriarAutor: autor  => {
    return fetch('http://localhost:8000/api/autor', {method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(autor)})
    .then(res => ApiService.TrataErros(res))
    .then(res => res.json());
  },
  
  ListaNomes: () => {
    return fetch('http://localhost:8000/api/autor/nome')
    .then(res => ApiService.TrataErros(res))
    .then(res => res.json());
  },

  ListaLivros: () => {
    return fetch('http://localhost:8000/api/autor/livro')
    .then(res => ApiService.TrataErros(res))
    .then(res => res.json());
  },

  RemoveAutor: id => {
    return fetch(`http://localhost:8000/api/autor/${id}`, {method: 'DELETE', headers: {'content-type': 'aplication/json'}})
    .then(res => ApiService.TrataErros(res))
    .then(res => res.json());
  },

  TrataErros : res => {
      if (!res.ok) {
        throw Error(res.responseText);
      }
      return res;
  }

}

 export default ApiService;