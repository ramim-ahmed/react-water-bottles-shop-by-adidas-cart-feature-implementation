import { useEffect, useState } from "react";
import Bottle from "./components/Bottle";
import Bottles from "./components/Bottles";
import Header from "./components/Header";
import toast, { Toaster } from "react-hot-toast";
export default function App() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/db/data.json");
      const data = await res.json();
      setBottles(data);
    };
    fetchData();
  }, []);
  const handleAddToCart = (bottle) => {
    const isProduct = cart.find((product) => product?.id === bottle.id);
    if (isProduct) {
      const updatedProduct = cart.map((pd) => {
        if (pd.id === isProduct.id) {
          pd.quantity = pd.quantity + 1;
        }
        return pd;
      });
      setCart(updatedProduct);
    } else {
      setCart([...cart, { ...bottle, quantity: 1 }]);
      toast.success("Product added!!");
    }
  };

  const removeToCart = (id) => {
    const isQuantityZero = cart.find((item) => item.id == id);
    if (isQuantityZero.quantity === 1) {
      const filterProducts = cart.filter((item) => item.id !== id);
      return setCart(filterProducts);
    }
    const updatedProduct = cart.map((pd) => {
      if (pd.id === id) {
        pd.quantity = pd.quantity - 1;
      }
      return pd;
    });
    setCart(updatedProduct);
  };

  useEffect(() => {
    const price = cart.reduce((total, current) => {
      return total + current.price * current.quantity;
    }, 0);
    setTotalPrice(price);
  }, [cart]);
  return (
    <div className="max-w-3xl mx-auto">
      <Header
        cart={cart}
        totalPrice={totalPrice}
        handleAddToCart={handleAddToCart}
        removeToCart={removeToCart}
      />
      <Bottles>
        {!bottles.length && <h1>Loading....</h1>}
        <div className="grid grid-cols-3 gap-4">
          {bottles?.map((bottle) => (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </Bottles>
      <Toaster position="top-center" />
    </div>
  );
}
