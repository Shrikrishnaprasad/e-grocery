import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { useHistory } from "react-router";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useGlobalContext } from "../../context";
import PayByRazorPay from "../Payment/PayByRazorPay";
import "./Cart.css";

const Cart = () => {
  const history = useHistory();
  const { cart, total, clearCart, toggleAmount } = useGlobalContext();

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="Cart-Wrapper">
        <h1 className="Cart-Title">YOUR BAG</h1>
        <div className="Cart-Top">
          <burron
            className="Cart-TopButton"
            onClick={() => history.push("/productList")}
            style={{
              color: "black",
              backgroundColor: "transparent",
            }}
          >
            CONTINUE SHOPPING
          </burron>
          <div className="Cart-TopTexts">
            <span className="Cart-TopText">Shopping Bag ({cart?.length})</span>
          </div>
          <burron
            className="Cart-TopButton"
            onClick={clearCart}
            style={{
              color: "red",
              backgroundColor: "transparent",
            }}
          >
            CLEAR CART
          </burron>
        </div>
        <div className="Cart-Bottom">
          <div className="Cart-Info">
            {cart?.length === 0 && <h1>Your cart is empty</h1>}
            {cart?.map((item) => {
              return (
                <>
                  <div className="Cart-Product" key={item?.id}>
                    <div className="Cart-ProductDetail">
                      <img
                        className="Cart-Image"
                        src={item?.img}
                        alt={item?.img}
                      />
                      <div className="Cart-Details">
                        <span>
                          <b>Product:</b> {item?.name}
                        </span>
                        <span>
                          <b>ID:</b> {item?.id + new Date().getTime()}
                        </span>
                      </div>
                    </div>
                    <div className="Cart-PriceDetail">
                      <div className="Cart-ProductAmountContainer">
                        <RemoveCircle
                          onClick={() => toggleAmount(item?.id, "dec")}
                          style={{ cursor: "pointer" }}
                        />
                        <div className="Cart-ProductAmount">{item?.amount}</div>
                        <AddCircle
                          onClick={() => toggleAmount(item?.id, "inc")}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div className="Cart-ProductPrice">
                        ₹ {item?.price}{" "}
                        <span style={{ fontSize: "20px" }}>/- kg</span>
                      </div>
                    </div>
                  </div>
                  <hr className="Cart-Hr" />
                </>
              );
            })}
          </div>
          <div className="Cart-Summary">
            <h1 className="Cart-SummaryTitle">ORDER SUMMARY</h1>
            <div className="Cart-SummaryItem">
              <span>Subtotal</span>
              <span>₹. {total}</span>
            </div>
            <div className="Cart-SummaryItem">
              <span>Estimated Shipping</span>
              <span>₹. 60.00</span>
            </div>
            <div className="Cart-SummaryItem">
              <span>Shipping Discount</span>
              <span style={{ color: "red" }}>
                ₹. {total >= 500 ? "-60.00" : "-0.00"}{" "}
              </span>
            </div>
            <div
              className="Cart-SummaryItem"
              style={{ fontWeight: "500", fontSize: "24px" }}
            >
              <span>Total</span>
              <span style={{ color: "green" }}>
                ₹. {total >= 500 ? total - 60 : total}
              </span>
            </div>
            {total > 0 ? (
              <PayByRazorPay amount={total >= 500 ? total - 60 : total} />
            ) : (
              <button
                className="Cart-TopButton"
                onClick={() => alert("Your cart is empty!")}
                style={{
                  width: "100%",
                  color: "black",
                  backgroundColor: "transparent",
                }}
              >
                CHECKOUT NOW
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
