import validator from 'validator';

/*
  Aqui é a centralização da validação do form a partir do
  campo passado por parâmetro utilizado a lib Validator
*/

class FormValidator {

  constructor(validacoes) {
    this.validacoes = validacoes;
  }

  valida(state) {

    let validacao = this.valido();

    this.validacoes.forEach(regra => {

      const inputValue = state[regra.campo.toString()];
      const args = regra.args || [];

      const metodValidation = typeof regra.metodo === 'string' ?
      validator[regra.metodo] : regra.metodo;

      if (metodValidation(inputValue, ...args, state) !== regra.validoQuando) {
        validacao[regra.campo] = {
          isInvalid: true,
          message: regra.mensagem
        }
        validacao.isValid = false;
      }

    });
    return validacao;
  }

  valido() {
    const validacao = {}

    //populando o objeto de acordo com a quantidade de campos
    //criando a chave isInvalid e atribuindo false para cada
    //**TODOS OS CAMPOS COMEÇAM VÁLIDOS!**

    this.validacoes.map(regra => (
      validacao[regra.campo] = { isInvalid: false, message: '' }
    ));

    return { isValid: true, ...validacao };
  }

}

export default FormValidator;