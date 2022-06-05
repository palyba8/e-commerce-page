import React from "react";
export default function ProductDetails(props) {
  const productAmount = props.productAmount;
  const changeProductAmount = props.changeProductAmount;
  const product = props.product;
  const addToCart = props.addToCart;
  return (
    <div className="product-details">
      <p className="product-company">{product.company}</p>
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <div className="product-price-container">
        <p className="product-price">
          ${product.price}
          <span className="product-price-discount">{product.discount}</span>
        </p>
        <p className="product-price-old">${product.oldPrice}</p>
      </div>
      <></>
      <div className="product-add">
        <div className="product-add-amount">
          <div
            className="product-add-amount-img"
            onClick={(event) => changeProductAmount(event)}
            data-action="decrease"
          >
            <img src="./images/icon-minus.svg" alt="-" />
          </div>
          <label htmlFor="addProduct"></label>
          <input
            className="product-add-amount-input"
            type="number"
            value={productAmount}
            min="0"
            onChange={(event) => changeProductAmount(event)}
            name="addProduct"
            id="addProduct"
            required
          />
          <div
            className="product-add-amount-img"
            onClick={(event) => changeProductAmount(event)}
            data-action="increase"
          >
            <img src="./images/icon-plus.svg" alt="+" />
          </div>
        </div>
        <button className="product-add-btn" onClick={addToCart}>
          <img src="./images/icon-cart-white.svg" alt="cart" /> Add to cart
        </button>
      </div>
    </div>
  );
}
