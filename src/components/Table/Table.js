/* eslint-disable react/prop-types */
import React from 'react';

const Table = ({ cartItems }) => {
  let total = 0;
  console.log('mama', cartItems);
  return (
    <table className="basket-table">
      <tbody>
        <tr>
          <th>ITEM DESCRIPTION</th>
          <th>UNIT PRICE</th>
          <th>QUANTITY</th>
          <th>SUB TOTAL</th>
        </tr>

        {Object.keys(cartItems).map((category) => {
          if (cartItems[category].length === 0) { return null; }
          console.log('byr', cartItems);
          return (
            <React.Fragment key={category}>
              <tr className="category">
                <td>{category}</td>
                <td />
                <td />
                <td />
              </tr>
              {cartItems[category].map((eachItem) => {
                total += eachItem.price * eachItem.inCartCount;
                return (
                  <tr key={eachItem.id}>
                    <td>{eachItem.name}</td>
                    <td className="items-align">
                      {`Rs. ${eachItem.price}.00`}
                    </td>
                    <td className="items-align">{eachItem.inCartCount}</td>
                    <td className="items-align">
                      {`Rs. ${eachItem.price * eachItem.inCartCount}.00 ${total}`}
                    </td>
                  </tr>
                );
              })}
            </React.Fragment>
          );
        })}
      </tbody>

    </table>
  );
};

export default Table;
