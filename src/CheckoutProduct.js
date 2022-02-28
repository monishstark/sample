import React from "react";
import "./CheckoutProduct.css";
import CloseIcon from "@mui/icons-material/Close";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, info }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <div className="checkoutProducr_disc">{info}</div>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button onClick={removeFromBasket} className="close">
        <CloseIcon />
      </button>
    </div>
  );
}

export default CheckoutProduct;
