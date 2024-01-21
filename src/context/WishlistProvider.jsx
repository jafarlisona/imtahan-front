import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const WishlistContext = createContext();
function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  function addWishlist(item) {
    if (wishlist.find((x) => x._id === item.id)) {
      setWishlist((wishlist) => wishlist.filter((x) => x._id !== item._id));
    } else {
      setWishlist([...wishlist]);
    }
    setWishlist([...wishlist, item]);
  }
  function removeWishlist(item) {
    setWishlist((wishlist) => wishlist.filter((x) => x._id !== item._id));
    setWishlist([...wishlist,item ]);
  }
  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist, removeWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
