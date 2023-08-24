import React from 'react';

function Cart({ cartItems = [], removeFromCart }) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>No items in cart</div>
      ) : (
        <>
          <ol className="list-group list-group-numbered">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.Name}</div>
                  Rs. {item.Price}
                </div>
                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                  className="badge bg-dark rounded-pill"
                >
                  X
                </button>
              </li>
            ))}
          </ol>
          <h3>
            Total Rs.{' '}
            {cartItems.reduce((total, item) => total + item.Price, 0)}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;
