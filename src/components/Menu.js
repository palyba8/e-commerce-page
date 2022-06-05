import { useState } from "react";
function Menu(props) {
  const products = props.products;
  const showCart = props.showCart;
  const deleteCartProduct = props.deleteCartProduct;
  const [mobileMenu, setMobileMenu] = useState(false);

  function toggleMobileMenu() {
    console.log(mobileMenu);
    setMobileMenu(!mobileMenu);
  }
  const navClass = "header-navigation" + (mobileMenu ? " open" : "");

  const CartElement = (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      {!products.cart ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-product-container">
          <div className="cart-product">
            <img
              className="cart-product-image"
              src={products.product.thumbnails[0]}
              alt={products.product.name}
            />
            <div className="cart-product-description">
              <p className="cart-product-name">{products.product.name}</p>
              <p className="cart-products-price">
                ${products.product.price} x {products.cart}
                <strong>
                  ${(Number(products.product.price) * products.cart).toFixed(2)}
                </strong>
              </p>
            </div>
            <img
              className="cart-product-delete"
              src="./images/icon-delete.svg"
              alt="delete"
              onClick={deleteCartProduct}
            />
          </div>
          <button className="product-add-btn">Checkout</button>
        </div>
      )}
    </div>
  );
  return (
    <header className="header">
      <div className="header-navigation-container">
        <img className="header-logo" src="./images/logo.svg" alt="logo" />
        <nav className={navClass}>
          <ul className="header-menu">
            <li className="header-menu-items">
              <button>Collections</button>
            </li>
            <li className="header-menu-items">
              <button href="#">Men</button>
            </li>
            <li className="header-menu-items">
              <button href="#">Women</button>
            </li>
            <li className="header-menu-items">
              <button href="#">About</button>
            </li>
            <li className="header-menu-items">
              <button href="#">Contact</button>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <div className={"hamburger" + (mobileMenu ? " open" : "")}></div>
        </div>
      </div>

      <div className="header-cart">
        <button className="header-cart-img" href="#" onClick={showCart}>
          {products.cart > 0 && (
            <div className="header-cart-amount">{products.cart}</div>
          )}
          <img src="./images/icon-cart.svg" alt="cart" />
        </button>
        {products.isCartOpen && CartElement}
        <button className="header-cart-link" href="#">
          <img
            className="header-cart-avatar"
            src="./images/image-avatar.png"
            alt="avatar"
          />
        </button>
      </div>
    </header>
  );
}

export default Menu;
