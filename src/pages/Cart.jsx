import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cartItems, removeFromCart, increase, decrease } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) return <p>장바구니가 비어있습니다.</p>;

  return (
    <div className={styles.cart}>
      {cartItems.map(item => (
        <div key={item.id} className={styles.item}>
          <h3>{item.name}</h3>
          <p>{item.price}원</p>
          <p>수량: {item.quantity}</p>
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>삭제</button>
        </div>
      ))}
      <h2>총 가격: {totalPrice}원</h2>
    </div>
  );
}

export default Cart;
