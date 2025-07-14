import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProuductCard";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
