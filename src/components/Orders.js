import React from 'react';
import PropTypes from 'prop-types';

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
      <table>
        {orders.map((order) => (
          <>
            <tr key={order.id}>
              <th>ORDER</th>
              <th>ITEMS</th>
              <th>DATE</th>
              <th>AMOUNT</th>
            </tr>
            <tr>
              <td>
                Order id:
                {' '}
                {order.orderId}
              </td>
              <td>
                {order.itemsCount}
                {' '}
                items
              </td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
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
                <tr>
                  <td>
                    TOTAL Rs.
                    {' '}
                    {order.items.reduce((accumulator, item) => (
                      accumulator + eachItem.price * item.quantity), 0)}
                    .00
                  </td>
                </tr>

              </>
            ))}

          </>
        ))}
      </table>
    </div>

  </div>
);

const productShape = {
  id: PropTypes.number,
  productName: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.price,
  url: PropTypes.string,
};

Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape(productShape)).isRequired,
};

export default Orders;
