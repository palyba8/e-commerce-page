// Product image gallery rendering
// Image slider => switchImage() + useEffect() with setInterval()
import React from "react";
export default function Productgallery(props) {
  const product = props.products.product;
  const setProducts = props.setProducts;

  const ThumbnailElements = product.thumbnails.map((thumbnail) => {
    const isActive = thumbnail === product.thumbnails[product.currentImage];
    const shadowClassName = isActive ? "shadow active" : "shadow";
    const itemId = product.thumbnails.indexOf(thumbnail);
    return (
      <div className="thumbnail" key={itemId + 1}>
        <div
          className={shadowClassName}
          data-id={itemId}
          onClick={(event) => showingImage(event)}
        ></div>
        <img src={thumbnail} alt="Sneakers" />
      </div>
    );
  });

  const MainPicture = (
    <div className="main-picture-container">
      <div
        className="nav-arrow-previous"
        onClick={(event) => modalNavigation(event)}
        data-direction="previous"
      >
        <svg
          className="navigation-icon"
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          alt="previous"
        >
          <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" />
        </svg>
      </div>
      <img
        className="modal-image"
        src={product.images[product.currentImage]}
        alt="Sneakers"
      />
      <div
        className="nav-arrow-next"
        onClick={(event) => modalNavigation(event)}
        data-direction="next"
      >
        <svg
          className="navigation-icon"
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          alt="next"
        >
          <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </div>
  );

  const ModalElements = (
    <div className="modal-gallery">
      <div className="modal-gallery-main-image">
        <svg
          width="25"
          height="25"
          className="modal-close"
          onClick={closeModal}
          xmlns="http://www.w3.org/2000/svg"
          alt={"close"}
        >
          <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
        </svg>
        {MainPicture}
      </div>
      <div className="product-gallery-thumbnails">{ThumbnailElements}</div>
    </div>
  );

  function modalNavigation(event) {
    const direction = event.target.dataset.direction || event.target.alt;
    if (direction === "next") {
      const imageIndex =
        product.currentImage === product.images.length - 1
          ? 0
          : product.currentImage + 1;
      setProducts((oldProducts) => {
        return {
          ...oldProducts,
          product: { ...oldProducts.product, currentImage: imageIndex }
        };
      });
    } else {
      const imageIndex =
        product.currentImage === 0
          ? product.images.length - 1
          : product.currentImage - 1;
      setProducts((oldProducts) => {
        return {
          ...oldProducts,
          product: { ...oldProducts.product, currentImage: imageIndex }
        };
      });
    }
  }

  function openModal() {
    setProducts((oldProducts) => {
      return {
        ...oldProducts,
        product: { ...oldProducts.product, isModal: true }
      };
    });
  }

  function closeModal() {
    setProducts((oldProducts) => {
      return {
        ...oldProducts,
        product: { ...oldProducts.product, isModal: false }
      };
    });
  }

  function showingImage(event) {
    const currentItem = Number(event.target.dataset.id);
    setProducts((oldProducts) => {
      return {
        ...oldProducts,
        product: { ...oldProducts.product, currentImage: currentItem }
      };
    });
  }

  function switchImage() {
    setProducts((oldProducts) => {
      if (oldProducts.product.currentImage < product.images.length - 1) {
        return {
          ...oldProducts,
          product: {
            ...oldProducts.product,
            currentImage: oldProducts.product.currentImage + 1
          }
        };
      } else {
        return {
          ...oldProducts,
          product: { ...oldProducts.product, currentImage: 0 }
        };
      }
    });
  }

  React.useEffect(() => {
    if (product.isModal) return;
    const interval = setInterval(switchImage, 7000);
    return () => clearInterval(interval);
  }, [product]);

  return (
    <div className="product-gallery">
      {product.isModal && ModalElements}
      <div className="product-gallery-main-image">
        <img
          className="proguct-image"
          src={product.images[product.currentImage]}
          alt="Sneakers"
          onClick={openModal}
        />
        <div className="mobile-main-picture"> {MainPicture}</div>

        <div className="product-gallery-thumbnails">{ThumbnailElements}</div>
      </div>
    </div>
  );
}
