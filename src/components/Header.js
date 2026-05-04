import React from "react";
import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="brand"> Online Shop</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
}
