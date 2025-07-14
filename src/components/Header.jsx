import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Header.module.css";

function Header() {
  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        쇼핑몰
      </Link>
      <nav>
        <Link to="/" className={styles.navItem}>홈</Link>
        <Link to="/cart" className={styles.navItem}>
          장바구니
          {totalQuantity > 0 && (
            <span className={styles.badge}>{totalQuantity}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
