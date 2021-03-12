// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './Normalize.css';
import Header from './components/Nav/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import ThemeContext, { themes } from './ThemeContext';
// import CounterInc from './components/CounterInc';

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState('false');

  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: 'Banana',
  //     quantity: 0,
  //     price: 40,
  //     url: 'assets/banana.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Cherry',
  //     quantity: 0,
  //     price: 40,
  //     url: 'assets/cherry.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Grape',
  //     quantity: 0,
  //     price: 40,
  //     url: 'assets/grape.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Mango',
  //     quantity: 0,
  //     price: 40,
  //     url: 'assets/mango.png',
  //   }, {
  //     id: 5,
  //     name: 'Orange',
  //     quantity: 0,
  //     price: 40,
  //     url: 'assets/orange.png',
  //   }, {
  //     id: 6,
  //     name: 'Peach',
  //     quantity: 0,
  //     price: 40,
  //     url: 'assets/peach.png',
  //   }, {
  //     id: 7,
  //     name: 'Pineapple',
  //     quantity: 0,
  //     price: 40,
  //     url: 'assets/pineapple.png',
  //   }, {
  //     id: 8,
  //     name: 'Strawberry',
  //     quantity: 0,
  //     price: 40,
  //     url: 'assets/strawberry.png',
  //   },
  // ]);

  // const [orders, setOrders] = useState([
  //   {
  //     orderId: 1,
  //     itemsCount: 3,
  //     date: 'Sun 04 Mar 2018',
  //     time: '10:01pm',
  //     amount: 883,
  //     items: [
  //       {
  //         id: 1,
  //         name: 'Banana',
  //         quantity: 1,
  //         price: 40,
  //         url: 'assets/banana.png',
  //       },
  //       {
  //         id: 2,
  //         name: 'Cherry',
  //         quantity: 2,
  //         price: 40,
  //         url: 'assets/cherry.png',
  //       },
  //       {
  //         id: 3,
  //         name: 'Grapes',
  //         quantity: 1,
  //         price: 40,
  //         url: 'assets/grape.png',
  //       },
  //     ],
  //   }, {
  //     orderId: 2,
  //     itemsCount: 3,
  //     date: 'Sun 04 Mar 2018',
  //     time: '10:01pm',
  //     amount: 883.00,
  //     items: [
  //       {
  //         id: 1,
  //         name: 'Banana',
  //         quantity: 1,
  //         price: 40,
  //         url: 'assets/banana.png',
  //       },
  //       {
  //         id: 2,
  //         name: 'Cherry',
  //         quantity: 2,
  //         price: 40,
  //         url: 'assets/cherry.png',
  //       },
  //       {
  //         id: 3,
  //         name: 'Grapes',
  //         quantity: 1,
  //         price: 40,
  //         url: 'assets/grape.png',
  //       },
  //     ],
  //   }]);

  const groupByCategory = (items) => {
    const groupedProducts = {};
    items.forEach((product) => {
      if (!(product.category in groupedProducts)) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    });
    return groupedProducts;
  };
  // groupByCategory takes in array; returns object

  useEffect(async () => {
    try {
      const { data, err } = await axios.get('http://localhost:8080/items');
      const items = data.data;

      if (items) {
        const updatedProduct = items.map((eachItem) => ({
          ...eachItem,
          inCartCount: 0, // add a new key
        }));
        // setProducts(updatedProduct);
        setFilteredProducts(groupByCategory(updatedProduct));
        setLoaded(true);
      } else if (err) {
        setLoaded(true);
        setError(err);
      }
    } catch (e) {
      setError(e);
    }
  }, []);

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:8080/orders');
    const ordersInfo = data.data;
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
    const itemsInCart = Object.values(cartItems).flat();
    // ARRAY OF OBJECTS
    const currentOrder = { items: itemsInCart };
    // const updatedOrders = [...orders, currentOrder]; // spread in [] coz orders initialy array
    // setOrders(updatedOrders);
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
      // console.log(category, item.id);
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
        {/* <CounterInc /> */}
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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cartItems: [],
//       productObjects: [
//         {
//           id: 1,
//           name: 'Banana',
//           quantity: 0,
//           price: 40,
//           url: 'assets/banana.png',
//         },
//         {
//           id: 2,
//           name: 'Cherry',
//           quantity: 0,
//           price: 40,
//           url: 'assets/cherry.png',
//         },
//         {
//           id: 3,
//           name: 'Grape',
//           quantity: 0,
//           price: 40,
//           url: 'assets/grape.png',
//         },
//         {
//           id: 4,
//           name: 'Mango',
//           quantity: 0,
//           price: 40,
//           url: 'assets/mango.png',
//         }, {
//           id: 5,
//           name: 'Orange',
//           quantity: 0,
//           price: 40,
//           url: 'assets/orange.png',
//         }, {
//           id: 6,
//           name: 'Peach',
//           quantity: 0,
//           price: 40,
//           url: 'assets/peach.png',
//         }, {
//           id: 7,
//           name: 'Pineapple',
//           quantity: 0,
//           price: 40,
//           url: 'assets/pineapple.png',
//         }, {
//           id: 8,
//           name: 'Strawberry',
//           quantity: 0,
//           price: 40,
//           url: 'assets/strawberry.png',
//         },
//       ],
//       cartCount: 0,
//       orders: [
//         {
//           orderId: 1,
//           itemsCount: 3,
//           date: 'Sun 04 Mar 2018',
//           time: '10:01pm',
//           amount: 883,
//           items: [
//             {
//               id: 1,
//               name: 'Banana',
//               quantity: 1,
//               price: 40,
//               url: 'assets/banana.png',
//             },
//             {
//               id: 2,
//               name: 'Cherry',
//               quantity: 2,
//               price: 40,
//               url: 'assets/cherry.png',
//             },
//             {
//               id: 3,
//               name: 'Grapes',
//               quantity: 1,
//               price: 40,
//               url: 'assets/grape.png',
//             },
//           ],
//         }, {
//           orderId: 2,
//           itemsCount: 3,
//           date: 'Sun 04 Mar 2018',
//           time: '10:01pm',
//           amount: 883.00,
//           items: [
//             {
//               id: 1,
//               name: 'Banana',
//               quantity: 1,
//               price: 40,
//               url: 'assets/banana.png',
//             },
//             {
//               id: 2,
//               name: 'Cherry',
//               quantity: 2,
//               price: 40,
//               url: 'assets/cherry.png',
//             },
//             {
//               id: 3,
//               name: 'Grapes',
//               quantity: 1,
//               price: 40,
//               url: 'assets/grape.png',
//             },
//           ],
//         }],
//     };
//   }

//   onIncrement = (id) => {
//     const { productObjects } = this.state;
//     this.setState((prevState) => {
//       let newState = {
//         ...prevState,
//         cartCount: prevState.cartCount + 1,
//         productObjects: productObjects.map((eachProduct) => {
//           if (eachProduct.id === id) {
//             return { ...eachProduct, quantity: eachProduct.quantity + 1 };
//           }
//           return eachProduct;
//         }),
//       };

//       newState = {
//         ...newState,
//         cartItems: newState.productObjects.filter((product) => product.quantity > 0),
//       };
//       // this.setState(newState, () => console.log('bb', this.state));
//       return newState;
//     });
//   }

//   onDecrement(item) { // passing item and not id, coz we  need to  check item's quantity
//     if (item.quantity === 0) {
//       return;
//     }
//     const { productObjects, cartCount } = this.state;
//     const newState = {
//       ...this.state,
//       cartCount: cartCount - 1,
//       productObjects: productObjects.map((eachProduct) => {
//         if (eachProduct.id === item.id) {
//           return { ...eachProduct, quantity: eachProduct.quantity - 1 };
//         }
//         return { ...eachProduct };
//       }),
//     };
//     this.setState(newState);
//   }

//   render() {
//     const {
//       cartCount, productObjects, cartItems, orders,
//     } = this.state;
//     return (
//       <>
//         <BrowserRouter>
//           {/* <CounterInc /> */}
//           <Header cartCount={cartCount} />
//           <Switch>
//             <Route path="/" exact>
//               <Home
//                 productObjects={productObjects}
//                 onIncrement={(id) => { this.onIncrement(id); }}
//                 onDecrement={(item) => { this.onDecrement(item); }}
//               />
//             </Route>
//             <Route path="/cart">
//               <Cart
//                 cartItems={cartItems}
//               />
//             </Route>
//             <Route path="/orders">
//               <Orders
//                 orders={orders}
//               />
//             </Route>
//             <Route path="/checkout">
//               <CheckoutForm />
//             </Route>
//           </Switch>
//         </BrowserRouter>

//       </>
//     );
//   }
// }

export default App;
