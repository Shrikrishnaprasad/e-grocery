import React, {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useState,
} from "react";
import reducer from "./reducer";

const AppContext = createContext();
const cartItems =
  JSON.parse(localStorage.getItem("cart")).length !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
const initialUser = { name: "" };

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(initialUser);

  const URL = "https://e-grocery-shop.herokuapp.com";

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    localStorage.removeItem("cart");
  };
  const addCart = (item) => {
    dispatch({ type: "ADD_CART", payload: item });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    if (state.cart?.length) alert("Cart items updated");
  }, [state.cart?.length]);

  const value = {
    initialUser,
    user,
    setUser,
    clearCart,
    addCart,
    remove,
    increase,
    decrease,
    toggleAmount,
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        ...value,
        URL,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
