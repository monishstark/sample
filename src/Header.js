import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.pinimg.com/564x/d6/61/9f/d6619ff5fe907f827b488f9e4deea313.jpg"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/loginpage">
          <div className="header_option">
            <PermIdentityOutlinedIcon className="header_profile" />
            <span className="header_optionlineone">Profile</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header_optionlinetwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
