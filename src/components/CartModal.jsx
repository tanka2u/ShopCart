import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartModal = ({
  cart,
  updateQuantity,
  removeFromCart,
  total,
  onClose,
  theme,
}) => {
  return (
    <div
      className="fixed top-0 right-0 h-full z-50 flex justify-end"
      onClick={onClose}
    >
      <div
        className={`w-80 sm:w-96 h-full shadow-lg flex flex-col ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        {/* Close Button */}
        <div
          className={`p-4 flex justify-between items-center border-b ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            className={`hover:text-gray-400 ${
              theme === "dark" ? "text-gray-100" : "text-gray-600"
            }`}
            onClick={onClose}
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p
              className={`text-center ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Your Cart is Empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 p-4 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className={`p-1 rounded ${
                        item.quantity === 1
                          ? "opacity-50 cursor-not-allowed"
                          : theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-300 hover:bg-gray-300"
                      }`}
                      disabled={item.quantity === 1}
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <FaMinus />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className={`p-1 rounded ${
                        theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  className={`p-2 hover:text-red-600 ${
                    theme === "dark" ? "text-red-400" : "text-red-500"
                  }`}
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total and Checkout */}
        <div
          className={`p-4 border-t ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <div
            className={`flex justify-between items-center text-lg font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={() =>
              alert("Checkout functionality is not implemented yet.")
            }
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
