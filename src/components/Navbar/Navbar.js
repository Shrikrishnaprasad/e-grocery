import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const { cart, clearCart, user, setUser, initialUser } = useGlobalContext();

  const logout = () => {
    setUser(initialUser);
    clearCart();
  };
  return (
    <div className="Navbar-Container">
      <div className="Navbar-Wrapper">
        <div className="Navbar-Center">
          <h3 className="Navbar-Logo">
            <span className="Navbar-LogoText" onClick={() => history.push("/")}>
              {" "}
              E-GROCERY
            </span>
          </h3>
        </div>
        <div className="Navbar-Right">
          {user.name && (
            <div className="Navbar-MenuItem">
              Hello!{" "}
              <span style={{ color: "purple", fontSize: "16px" }}>
                {" "}
                {user.name}
              </span>
            </div>
          )}
          <div
            className="Navbar-MenuItem"
            onClick={() => history.push("/productList")}
          >
            PRODUCTS
          </div>
          <div
            className="Navbar-MenuItem"
            onClick={() => history.push("/register")}
          >
            REGISTER
          </div>
          {user.name !== "" ? (
            <div className="Navbar-MenuItem" onClick={logout}>
              LOGOUT
            </div>
          ) : (
            <div
              className="Navbar-MenuItem"
              onClick={() => history.push("/login")}
            >
              SIGN IN
            </div>
          )}

          <div
            className="Navbar-MenuItem"
            onClick={() => history.push("/cart")}
          >
            <Badge badgeContent={cart?.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
