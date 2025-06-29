import { useState } from "react";
import Header from "../components/Header";
import ProductCart from "../components/ProductCart";

const product = [
  {
    id: 1,
    name: "Premium Wireless Headphones with noise cancellation",
    price: 199.99,
    description:
      "High-quality wireless headphones with noise cancellation feature.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    description:
      "Advanced smartwatch with health monitoring features and track your daily life activities",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "JBL Portable Wireless Speaker",
    price: 79.99,
    description:
      "Waterproof portable speaker with amazing sound quality and strong base with fast charging",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "4K Drone Camera",
    price: 599.99,
    description:
      "Professional drone with 4k camera and stable flight, enhance your travel experience",
    image:
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 89.99,
    description: "High-precision gaming mouse with RGB lighting",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 149.99,
    description: "RGB mechanical keyboard with custom switches",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    price: 129.99,
    description: "True wireless earbuds with active noise cancellation",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "4K Monitor",
    price: 399.99,
    description:
      "Experience stunning visuals with this 32-inch 4K Ultra HD monitor",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
  },
];

const Home = () => {
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("light");

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productsId, delta) => {
    setCart(
      cart.map((item) =>
        item.id === productsId
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen`}
    >
      <Header
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        total={total}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="p-4 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {product.map((products) => (
            <ProductCart
              key={products.id}
              product={products}
              addToCart={addToCart}
              theme={theme}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
