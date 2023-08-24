import React from 'react';
import './Card.css';

function Card({ product, addToCart, cartItems }) {
  return (
    <div className="col-lg-4 mt-5 col-md-6 col-sm-12 mb-3">
      <div className="card h-100">
        <div className="card-container"> 
          <img className="card-img-top mt-2" src={product.Image} alt={product.Name} />
          <div className="card-body">
            <h3 className="card-title">{product.Name}</h3>
            <h6 className="card-subtitle mb-2 text-muted">Price: {product.Price}</h6>
            <button
              disabled={cartItems.some(obj => obj.Id === product.Id)}
              onClick={() => {
                addToCart(product);
              }}
              className="btn btn-outline-dark mt-auto"
            >
              {cartItems.some(obj => obj.Id === product.Id) ? 'Added to cart' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
