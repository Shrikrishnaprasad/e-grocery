import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./PayByRazorPay.css";

const PayByRazorPay = ({ amount }) => {
  const history = useHistory();
  const { user, cart, clearCart, URL } = useGlobalContext();
  const options = {
    key: "rzp_test_YkCd4OxHtBFQbV", // api-key
    amount: amount * 100, //  = INR 1 = 100 (so * 100)
    name: "E-Grocery",
    description: "You are paying for E-Grocery",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      //alert(response.razorpay_payment_id);

      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/order/newOrder`, {
        method: "POST",
        body: JSON.stringify({
          userEmail: user.email,
          orders: cart,
          total: amount,
          amount: cart.length,
        }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data._id) {
            alert(
              "Payment successfully done, Your order will be delivered soon!"
            );
            clearCart();
            history.push("/");
          } else {
            alert("Sorry! your payment failed, please try again");
          }
        })
        .catch((err) => console.log(err));
    },
    prefill: {
      name: user.name,
      contact: user.mobile,
      email: user.email,
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };

  const openPayModal = () => {
    if (user.name !== "") {
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      history.push("/cart");
      alert("Kindly please login to pay");
    }
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <button className="Payment-Button" onClick={openPayModal}>
        CHECKOUT NOW
      </button>
    </>
  );
};

export default PayByRazorPay;
