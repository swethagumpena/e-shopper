import React from 'react';
import PropTypes from 'prop-types';
import './Orders.scss';

const Orders = ({ orders }) => (
  <div>
    {/* <p>{JSON.stringify(orders)}</p> */}
    <div className="basket-msg">
      <h3>All Orders</h3>
      <hr />
      {`Past Orders (${orders.length})`}
    </div>
    <div>
      <table data-testid="all-orders-table" className="basket-table">
        <tbody>
          {orders.map((order) => {
            const orderDate = new Date(order.date);
            let total = 0;
            return (
              <React.Fragment key={order.id}>
                <tr>
                  <th>ORDER</th>
                  <th>ITEMS</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                </tr>
                <tr>
                  <td className="items-align">
                    {`Order id: ${order.id}`}
                  </td>
                  <td className="items-align">
                    {`${order.items.length} items`}
                  </td>
                  <td className="items-align">{`${orderDate.getDate()} - ${orderDate.getMonth()} - ${orderDate.getFullYear()}`}</td>
                  <td className="items-align">
                    {`Rs. ${total}.00`}
                  </td>
                </tr>
                <tr>
                  <th>ITEM DESCRIPTION</th>
                  <th>UNIT PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUB TOTAL</th>
                </tr>

                {order.items.map((eachItem) => {
                  total += eachItem.price * eachItem.inCartCount;
                  return (
                    <React.Fragment key={eachItem.id}>
                      {/* <tr className="category">
                        <td>{eachItem.category}</td>
                        <td />
                        <td />
                        <td />
                      </tr> */}
                      <tr>
                        <td>{eachItem.name}</td>
                        <td className="items-align">
                          {`Rs. ${eachItem.price}.00`}
                        </td>
                        <td className="items-align">{eachItem.inCartCount}</td>
                        <td className="items-align">
                          {`Rs. ${eachItem.price * eachItem.inCartCount}.00`}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
                <tr>
                  <td />
                  <td />
                  <td />
                  <td className="total-data">
                    <p>
                      {`TOTAL Rs. ${total}.00`}
                    </p>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
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
