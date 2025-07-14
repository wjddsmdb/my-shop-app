// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart'); // 👉 장바구니 페이지로 이동
  };

  if (!product) return <p>상품이 존재하지 않습니다.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}원</p>
      <button onClick={handleAddToCart}>장바구니에 담기</button>
    </div>
  );
}

export default ProductDetail;
