import React, { useState } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Cart from './Cart';


function App() {
  //task check 
  const [products, setProducts] = useState([
    {
      Id: 1,
      Name: "iphone SE",
      Price: 42000,
      Image: "https://static.langimg.com/thumb/msid-75169403,width-200,resizemode-4/75169403.jpg"
    },
    {
      Id: 2,
      Name: "iwatch series 5",
      Price: 50000,
      Image: "https://static.toiimg.com/thumb/resizemode-4,msid-71216590,imgsize-500,width-800/71216590.jpg"
    },
    {
      Id : 3,
      Name : "iPad",
      Price : 40000,
      Image :"https://img4.gadgetsnow.com/gd/images/products/additional/medium/G353349_View_1/mobiles/tablets/apple-ipad-air-2022-5th-gen-10-9-inches-wi-fi-only-with-apple-m1-chip-space-grey-64gb-8gb-ram-.jpg/270/200"
    },
    {
      Id : 4,
      Name : "iphone 11",
      Price : 35000,
      Image :"https://img5.gadgetsnow.com/gd/images/products/additional/medium/G121370_View_2/mobiles/smartphones/apple-iphone-11-64-gb-white-4-gb-ram-.jpg/270/200"
    },
    {
      Id : 5,
      Name : "iphone 12",
      Price : 45000,
      Image :"https://img2.gadgetsnow.com/gd/images/products/additional/medium/G349926_View_1/mobiles/refurbished-mobiles/refurbished-apple-iphone-12-red-64gb-4gb-ram-.jpg/270/200"
    },
    {
      Id : 6,
      Name : "iphone 13",
      Price : 70000,
      Image :"https://img1.gadgetsnow.com/gd/images/products/additional/medium/G206586_View_1/mobiles/smartphones/apple-iphone-13-128-gb-midnight-4-gb-ram-.jpg/270/200"
    },
    {
      Id : 7,
      Name : "iphone 13 pro",
      Price : 150000,
      Image :"https://img5.gadgetsnow.com/gd/images/products/additional/medium/G215156_View_1/mobiles/smartphones/apple-iphone-13-pro-128-gb-graphite-6-gb-ram-.jpg"
    },
    {
      Id : 8,
      Name : "iphone 14 pro",
      Price : 170000,
      Image :"https://static.toiimg.com/thumb/resizemode-4,msid-80635304,width-250,imgv-2/80635304.jpg"
    },
    {
      Id : 9,
      Name : "iphone 13 Mini",
      Price : 50000,
      Image :"https://img4.gadgetsnow.com/gd/images/products/additional/large/G306182_View_1/mobiles/smartphones/apple-iphone-13-mini-128-gb-blue-4-gb-ram-.jpg"
    }
 
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  }

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(item => item.Id !== product.Id);
    setCartItems(updatedCartItems);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Apple.inc</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>


        <header class="bg-black py-5">
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
            <img class="pic" src="https://e0.pxfuel.com/wallpapers/466/37/desktop-wallpaper-black-and-white-apple-black-apple-logo.jpg" alt="header" />
        </div>
    </div>
</header>


      <div className='content'>
        <div className='container_box'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='row'>
                {products.map((product) => (
                  <Card
                    key={product.Id}
                    product={product}
                    addToCart={addToCart}
                    cartItems={cartItems}
                  />
                ))}
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='cart-container'>
                <h3>Cart</h3>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

