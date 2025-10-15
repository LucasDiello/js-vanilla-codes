export const fetchProduct = async (ProductID) => {
  if (ProductID) {
    const response = await fetch(`https://api.mercadolibre.com/items/${ProductID}`);
    const data = await response.json();
    return data;
  }

  throw new Error('ID não informado');
};

export const fetchProductsList = async (product) => {
  if (product) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
    const data = await response.json();
    return data.results;
  }

  throw new Error('Termo de busca não informado');
};
