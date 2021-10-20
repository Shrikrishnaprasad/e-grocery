import { useHistory } from "react-router";
import React from "react";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="Footer-Container">
      <div className="Footer-Left">
        <h2 className="Footer-Logo">
          <span className="Footer-LogoText" onClick={() => history.push("/")}>
            {" "}
            E-GROCERY
          </span>
        </h2>
        <p className="Footer-Desc">
          We believes in providing the highest level of customer service and is
          continuously innovating to meet customer expectations. For all your
          order values above Rs. 500, we provide free delivery. If you ever find
          an item missing on delivery or want to return a product, you can
          report it to us within 48 hours for a refund.
        </p>
        <div className="Footer-SocialContainer">
          <div className="Footer-SocialIcon" color="3B5999">
            <Facebook />
          </div>
          <div color="E4405F">
            <Instagram />
          </div>
          <div color="55ACEE">
            <Twitter />
          </div>
          <div color="E60023">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="Footer-Center">
        <h3 className="Footer-Title">Useful Links</h3>
        <ul className="Footer-List">
          <li className="Footer-ListItem" onClick={() => history.push("/")}>
            Home
          </li>
          <li
            className="Footer-ListItem"
            onClick={() => history.push("/productList")}
          >
            Products
          </li>
          <li className="Footer-ListItem" onClick={() => history.push("/cart")}>
            Cart
          </li>
          <li
            className="Footer-ListItem"
            onClick={() => history.push("/register")}
          >
            Register
          </li>
          <li
            className="Footer-ListItem"
            onClick={() => history.push("/login")}
          >
            Login
          </li>
        </ul>
      </div>
      <div className="Footer-Right">
        <h3 className="Footer-Title">Contact</h3>
        <div className="Footer-ContactItem">
          <Room style={{ marginRight: "10px" }} /> S.A.Garden, Selvapuram,
          Coimbatore - 641026
        </div>
        <div className="Footer-ContactItem">
          <Phone style={{ marginRight: "10px" }} /> 97916-27920
        </div>
        <div className="Footer-ContactItem">
          <MailOutline style={{ marginRight: "10px" }} /> sgkrishna619@gmail.com
        </div>
        <img
          className="Footer-Payment"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="Payment-links"
        />
      </div>
    </div>
  );
};

export default Footer;
