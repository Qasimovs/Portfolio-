import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../redux/wishlistSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-container">
      <h2>İstək Siyahısı</h2>
      {wishlist.length === 0 ? (
        <p>İstək siyahısı boşdur.</p>
      ) : (
        <>
          <ul>
            {wishlist.map(product => (
              <li key={product.id}>
                {product.name}
                <button onClick={() => dispatch(removeFromWishlist(product.id))}>
                  Sil
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearWishlist())}>
            Bütün məhsulları sil
          </button>
        </>
      )}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Wishlist;
