const input = document.querySelector('.cep-input');
const span = document.querySelector('.cart__address');

export const getAddress = async (CEP) => {
  const response1 = fetch(`https://cep.awesomeapi.com.br/json/${CEP}`).then((result) => result.json());
  const response2 = fetch(`https://brasilapi.com.br/api/cep/v2/${CEP}`).then((result) => result.json());

  const address = await Promise.any([response1, response2]);
  return address;
};

export const searchCep = async () => {
  const cep = input.value;
  try {
    const response = await getAddress(cep);
    const { address, district, city, state } = response;
    if (response) {
      span.innerHTML = `${address} - ${district} - ${city} - ${state}`;
    }
  } catch (error) {
    span.innerHTML = 'CEP não encontrado';
  }
};
