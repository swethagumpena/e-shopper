import React from 'react';
import PropTypes from 'prop-types';
import './Orders.scss';

const Orders = ({ orders }) => (
  <div>
    {/* <p>{JSON.stringify(orders)}</p> */}
    <div className="basket-msg">
      All Orders
      <hr />
      {`Past Orders (${orders.length})`}
    </div>
    <div>
      <table className="basket-table">
        <tbody>
          {orders.map((order) => (
            <div key={order.id}>
              <tr>
                <th>ORDER</th>
                <th>ITEMS</th>
                <th>DATE</th>
                <th>AMOUNT</th>
              </tr>
              <tr>
                <td className="items-align">
                  Order id:
                  {' '}
                  {order.id}
                </td>
                <td className="items-align">
                  {order.items.length}
                  {' '}
                  items
                </td>
                <td className="items-align">{order.date}</td>
                <td className="items-align">
                  Rs.
                  {' '}
                  {order.amount}
                  .00
                </td>
              </tr>
              <tr>
                <th>ITEM DESCRIPTION</th>
                <th>UNIT PRICE</th>
                <th>QUANTITY</th>
                <th>SUB TOTAL</th>
              </tr>

              {order.items.map((eachItem) => (
                <>
                  <tr className="category">
                    <td>{eachItem.category}</td>
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr key={eachItem.id}>
                    <td>{eachItem.name}</td>
                    <td className="items-align">
                      Rs.
                      {' '}
                      {eachItem.price}
                      .00
                    </td>
                    <td className="items-align">{eachItem.count}</td>
                    <td className="items-align">
                      Rs.
                      {' '}
                      {eachItem.price * eachItem.count}
                      .00
                    </td>
                  </tr>
                </>
              ))}
              <tr>
                <td />
                <td />
                <td />
                <td className="total-data">
                  <p>
                    TOTAL Rs.
                    {' '}
                    {order.items.reduce((accumulator, item) => (
                      accumulator + item.price * item.count), 0)}
                    .00
                  </p>
                </td>
              </tr>
            </div>
          ))}
        </tbody>

      </table>
    </div>

  </div>
);

// const productShape = {
//   id: PropTypes.number,
//   name: PropTypes.string,
//   quantity: PropTypes.number,
//   price: PropTypes.number,
//   url: PropTypes.string,
// };

// const orderShape = {
//   orderId: PropTypes.number,
//   itemsCount: PropTypes.number,
//   date: PropTypes.string,
//   time: PropTypes.string,
//   amount: PropTypes.number,
//   items: PropTypes.arrayOf(PropTypes.shape(productShape)),
// };

// Orders.propTypes = {
//   orders: PropTypes.arrayOf(PropTypes.shape(orderShape)).isRequired,

// };

const itemShape = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number, // inCartCount now, not stock
  category: PropTypes.string,
};

const orderShape = {
  id: PropTypes.number,
  date: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape(itemShape)),
};

Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape(orderShape)).isRequired,
};

export default Orders;
