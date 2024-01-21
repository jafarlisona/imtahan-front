import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistProvider";
import "./index.scss";
function OurMenu() {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();
  const [menuCategory, setMenuCategory] = useState("main");
  const { wishlist, addWishlist, removeWishlist } = useContext(WishlistContext);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <section id="menu">
      <div className="container">
        <h4>OUR MENU</h4>
        <h1>Discover Our Exclusive Menu</h1>
        <div className="btns">
          <button onClick={() => setMenuCategory("main")}>
            <i className="fa-solid fa-drumstick-bite"></i> Main
          </button>
          <button onClick={() => setMenuCategory("dessert")}>
            <i className="fa-solid fa-ice-cream"></i> Dessert
          </button>
          <button onClick={() => setMenuCategory("drinks")}>
            <i className="fa-solid fa-champagne-glasses"></i> Drinks
          </button>
        </div>
        <div className="cards">
          {menu
            .filter((x) => x.category === menuCategory)
            .map((x) => (
              <div className="card" key={x._id}>
                <div className="img">
                  <img src={x.image} alt="" width={"100px"} />
                </div>
                <div className="text">
                  <h3>{x.name}</h3>
                  <p>{x.ingredients}</p>
                </div>
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
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default OurMenu;
