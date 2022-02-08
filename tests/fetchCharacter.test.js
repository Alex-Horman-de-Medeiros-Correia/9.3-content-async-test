require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  /* it('verifica se nos retorna uma mensagem de erro ao passar uma função anônima', async () => {
    const erroMessage = await fetchCharacter();
    expect(erroMessage).toEqual(new Error('You must provide an url')); //new Error é um construtor do js que nos retorna um objeto de erro.
  }); */


  it('Verifica se fetch foi chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');

    expect(fetch).toHaveBeenCalledTimes(1); //esse matcher verifica o número de vezes que a função foi chamada anteriormente.
    expect(fetch).toHaveBeenCalledWith(url) //esse matcher verifica se a função carrega aquele exato argumento, isto é, se fetch possui como argumento o que está contido na url.
  });
});





//matchers RESOLVES E REJECTS - Fazem o TESTE direto na promise!