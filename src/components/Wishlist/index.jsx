import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistProvider";

function Wishlist() {
  const { wishlist, addWishlist, removeWishlist } = useContext(WishlistContext);
  return (
    <section id="wishlist">
      <div className="container">
        <h1>Wishlist</h1>
        <div className="cards">
          {wishlist.map((x) => (
            <div className="card">
              <img src={x.image} alt="" />
              <div className="text">
                <h3>{x.name}</h3>
                <div className="price">
                  <span>${x.price}</span>
                  <div className="icons">
                    {wishlist.some((item) => item._id !== x.id) ? (
                      <i
                        className="fa-solid fa-heart"
                        onClick={() => removeWishlist(x)}
                      ></i>
                    ) : (
                      <i
                        className="fa-regular fa-heart"
                        onClick={() => addWishlist(x)}
                      ></i>
                    )}

                    <i
                      className="fa-solid fa-eye"
                      onClick={() => navigate("/detail/" + x._id)}
                    ></i>
                    <i
                      className="fa-solid fa-bag-shopping"
                      onClick={() => addBasket(x)}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Wishlist;
