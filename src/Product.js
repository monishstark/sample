import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Product({ id, title, image, price, info }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        info: info,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="" />

      <div className="product_info">
        <p>{title}</p>
        <div className="product_disc">
          <p>{info}</p>
        </div>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>

      <button onClick={addToBasket}>
        <ShoppingCartIcon />
      </button>
    </div>
  );
}

export default Product;
