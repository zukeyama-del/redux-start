import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContiner from "./components/CartContiner";
import { useDispatch, useSelector } from "react-redux";
import { calulateTotals } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calulateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContiner />
    </main>
  );
};

export default App;
