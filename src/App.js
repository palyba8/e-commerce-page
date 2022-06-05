import { useState } from "react";
import Menu from "./components/Menu";
import ProductGalery from "./components/ProductGalery";
import ProductDetails from "./components/ProductDetails";
function App() {
  const [products, setProducts] = useState({
    productAmount: 0,
    isCartOpen: false,
    cart: 0,
    product: {
      currentImage: 0,
      isModal: false,
      name: "Fall Limited Edition Sneakers",
      company: "Sneaker Company",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: "125.00",
      discount: "50%",
      oldPrice: "250.00",
      images: [
        "./images/image-product-1.jpg",
        "./images/image-product-2.jpg",
        "./images/image-product-3.jpg",
        "./images/image-product-4.jpg"
      ],
      thumbnails: [
        "./images/image-product-1-thumbnail.jpg",
        "./images/image-product-2-thumbnail.jpg",
        "./images/image-product-3-thumbnail.jpg",
        "./images/image-product-4-thumbnail.jpg"
      ]
    }
  });

  function addToCart() {
    setProducts((oldProducts) => {
      return {
        ...oldProducts,
        cart: products.cart + products.productAmount,
        productAmount: 0
      };
    });
  }

  function deleteCartProduct() {
    setProducts((oldProducts) => {
      return { ...oldProducts, cart: 0 };
    });
  }

  function showCart() {
    setProducts((oldProducts) => {
      return { ...oldProducts, isCartOpen: !products.isCartOpen };
    });
  }

  function changeProductAmount(event) {
    if (event.target.value) {
      event.target.value >= 0 &&
        setProducts((oldProduct) => {
          return { ...oldProduct, productAmount: event.target.value };
        });
    } else if (
      event.target.alt === "+" ||
      event.target.dataset.action === "increase"
    ) {
      setProducts((oldProduct) => {
        return { ...oldProduct, productAmount: products.productAmount + 1 };
      });
    } else if (
      event.target.alt === "-" ||
      event.target.dataset.action === "decrease"
    ) {
      products.productAmount > 0 &&
        setProducts((oldProduct) => {
          return { ...oldProduct, productAmount: products.productAmount - 1 };
        });
    }
  }

  return (
    <div className="container">
      <Menu
        products={products}
        deleteCartProduct={deleteCartProduct}
        showCart={showCart}
      />
      <div className="product">
        <ProductGalery products={products} setProducts={setProducts} />
        <ProductDetails
          product={products.product}
          productAmount={products.productAmount}
          changeProductAmount={changeProductAmount}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default App;
