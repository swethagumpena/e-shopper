import axios from 'axios';

const getItems = async () => {
  const { data } = await axios.get('http://localhost:8080/items');
  const items = data.data;
  const updatedProduct = items.map((eachItem) => ({
    ...eachItem,
    inCartCount: 0, // add a new key
  }));
  return updatedProduct;
};

const getOrders = async () => {
  const { data } = await axios.get('http://localhost:8080/orders');
  return data.data;
};

export default { getItems, getOrders };
