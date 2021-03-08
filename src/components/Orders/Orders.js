import React from 'react';
import PropTypes from 'prop-types';
import './Orders.css';

const Orders = ({ orders }) => (
  <div>
    {/* <p>{JSON.stringify(orders)}</p> */}
    <div className="basket-msg">
      All Orders
      <hr />
      Past Orders (
      {orders.length}
      )
    </div>
    <div>
      <table className="basket-table">
        <tbody>
          {orders.map((order) => (
            <>
              <tr key={order.id}>
                <th>ORDER</th>
                <th>ITEMS</th>
                <th>DATE</th>
                <th>AMOUNT</th>
              </tr>
              <tr>
                <td className="items-align">
                  Order id:
                  {' '}
                  {order.orderId}
                </td>
                <td className="items-align">
                  {order.itemsCount}
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
              <tr className="category">
                <td>FRUITS</td>
                <td />
                <td />
                <td />
              </tr>
              {order.items.map((eachItem) => (
                <>
                  <tr key={eachItem.id}>
                    <td>{eachItem.productName}</td>
                    <td className="items-align">
                      Rs.
                      {' '}
                      {eachItem.price}
                      .00
                    </td>
                    <td className="items-align">{eachItem.quantity}</td>
                    <td className="items-align">
                      Rs.
                      {' '}
                      {eachItem.price * eachItem.quantity}
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
                      accumulator + item.price * item.quantity), 0)}
                    .00
                  </p>
                </td>
              </tr>
            </>
          ))}
        </tbody>

      </table>
    </div>

  </div>
);

const productShape = {
  id: PropTypes.number,
  productName: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  url: PropTypes.string,
};

Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape(productShape)).isRequired,
};

export default Orders;
