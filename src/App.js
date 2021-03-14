/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './Normalize.css';
import Header from './components/Nav/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import ThemeContext, { themes } from './ThemeContext';
import ApiUtils from './utils/api';

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [filteredProducts, setFilteredProducts] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState('false');

  // groupByCategory takes in array; returns object
  const groupByCategory = (items) => {
    const groupedByCategory = items.reduce((groupedProducts, item) => {
      const currentCategory = item.category;
      const prevProductsOfSameCategory = groupedProducts[currentCategory] || [];
      return {
        ...groupedProducts,
        [currentCategory]: [...prevProductsOfSameCategory, item],
      };
    }, {});
    console.log('grouped', groupedByCategory);
    return groupedByCategory;
  };
  //   const groupedProducts = {};
  //   items.forEach((product) => {
  //     if (!(product.category in groupedProducts)) {
  //       groupedProducts[product.category] = [];
  //     }
  //     groupedProducts[product.category].push(product);
  //   });
  //   return groupedProducts;
  // };
  // groupByCategory takes in array; returns object

  useEffect(async () => {
    try {
      const updatedProduct = await ApiUtils.getItems();
      console.log('up', updatedProduct); // array of objects
      if (updatedProduct) {
        setFilteredProducts(groupByCategory(updatedProduct));
        // object with key as category and value as array of objects
        setIsLoaded(true);
      } else {
        setIsLoaded(true);
      }
    } catch (e) {
      setError(e);
    }
  }, []);

  useEffect(async () => {
    const ordersInfo = await ApiUtils.getOrders();
    console.log('orders', ordersInfo);
    setOrders(ordersInfo);
    // const categorisedOrders = ordersInfo.map((order) => ({
    //   ...order,
    //   items: groupByCategory(order.items),
    // }));
    // console.log('kk', categorisedOrders);
    // setOrders(categorisedOrders);
  }, []);

  // on checkout
  const addNewOrder = () => {
    console.log('before', cartItems);
    const itemsInCart = Object.values(cartItems).flat();
    console.log('aftter', itemsInCart);
    // ARRAY OF OBJECTS
    const currentOrder = { items: itemsInCart };
    return currentOrder;
  };

  const updateAllOrders = (orderResponse) => {
    setOrders([...orders, orderResponse]);
  };

  const onSubmitReset = () => {
    setCartCount(0);
  };

  const onIncrement = (item, category) => {
    if (item.count > 0) {
      // count is stock here
      // eslint-disable-next-line max-len
      const newProducts = filteredProducts[category].map((eachProduct) => ((eachProduct.id === item.id) ? {
        ...eachProduct,
        inCartCount: eachProduct.inCartCount + 1,
        count: eachProduct.count - 1,
      } : eachProduct));

      const newFilteredObject = { ...filteredProducts };
      newFilteredObject[category] = newProducts;

      setFilteredProducts(newFilteredObject);
      setCartCount(cartCount + 1);

      const cartProducts = { ...newFilteredObject };

      Object.keys(cartProducts).forEach((productCategory) => {
        cartProducts[productCategory] = cartProducts[productCategory]
          .filter((i) => i.inCartCount > 0);
      });
      setCartItems(cartProducts);
    }
  };

  // const onIncrement = (id, category) => {
  //   const modifiedProductCount = groupProducts[category].map((product) => {
  //     if (product.id === id) {
  //       const newProductCount = product.count - 1;
  //       const newProductCartCount = product.countInCart + 1;
  //       const newProduct = { ...product, count: newProductCount, countInCart: newProductCartCount };
  //       return newProduct;
  //     }
  //     return product;
  //   });
  //   groupProducts[category] = modifiedProductCount;
  //   setGroupProduct({ ...groupProducts });
  //   setCartCount(cartCount + 1);
  // };

  const onDecrement = (item, category) => {
    if (item.inCartCount === 0) {
      return;
    }
    const newState = filteredProducts[category].map((eachProduct) => (eachProduct === item ? {
      ...eachProduct,
      inCartCount: eachProduct.inCartCount - 1,
      count: eachProduct.count + 1,

    } : eachProduct));
    const newfilterProducts = filteredProducts;
    newfilterProducts[category] = newState;
    setCartCount(cartCount - 1);

    const cartProducts = { ...newfilterProducts };

    Object.keys(cartProducts).forEach((productCategory) => {
      cartProducts[productCategory] = cartProducts[productCategory]
        .filter((i) => i.inCartCount > 0);
    });
    setCartItems(cartProducts);
  };

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  if (error !== null) {
    return (
      <div>error.message</div>
    );
  }
  if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Header cartCount={cartCount} />
        </ThemeContext.Provider>

        <div className="toggle-button">
          <button type="button" onClick={toggleTheme}>Change Theme</button>
        </div>

        <Switch>
          <Route path="/" exact>
            <Home
              productObjects={filteredProducts}
              onIncrement={(item, category) => { onIncrement(item, category); }}
              onDecrement={(item, category) => { onDecrement(item, category); }}
            />
          </Route>
          <Route path="/cart">
            <Cart
              cartCount={cartCount}
              cartItems={cartItems}
            />
          </Route>
          <Route path="/orders">
            <Orders
              orders={orders}
            />
          </Route>
          <Route path="/checkout">
            <CheckoutForm
              addNewOrder={addNewOrder}
              onSubmitReset={onSubmitReset}
              cartItems={cartItems}
              updateAllOrders={updateAllOrders}
            />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
