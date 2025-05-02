import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🛒 MyShop</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Ana Səhifə</Link></li>
        <li><Link to="/wishlist">İstək Siyahısı</Link></li>

        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Çıxış et
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/login">Giriş</Link></li>
            <li><Link to="/register">Qeydiyyat</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
