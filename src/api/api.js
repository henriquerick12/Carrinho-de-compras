const fetchProductos = async (params) => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${params}`
  );
  const data = await response.json();

  return data.results;
};

export default fetchProductos;
