import { useState } from "react";
import CartModal from "./CartModal";
import {
  FaShoppingCart,
  FaSun,
  FaMoon,
  FaStore,
  FaLessThan,
} from "react-icons/fa";
const Header = ({
  cart,
  updateQuantity,
  removeFromCart,
  total,
  theme,
  toggleTheme,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header
      className={`p-3 mb-8 shadow ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold flex items-center gap-4 ${
            theme === "dark" ? "text-white " : "text-gray-800"
          }`}
        >
          <FaStore className="text-blue-600" /> ShopCart
        </h1>
        <div className="flex items-center gap-5">
          <button
            className={`p-2 text-2xl relative ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-0 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
          <button
            className="p-2 rounded-full text-black cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <FaSun className="text-white text-3xl hover:bg-gray-600 p-1 rounded-full" />
            ) : (
              <FaMoon className="text-gray-800 text-2xl hover:bg-gray-300 p-1 rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModal
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          total={total}
          theme={theme}
          toggleTheme={toggleTheme}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
