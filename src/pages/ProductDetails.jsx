import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    const existingItem = cart.find((cartItem) => cartItem.id === product.id);
    if (!existingItem) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    }
  };

  if (!product) {
    return <div className="flex min-h-[60vh] items-center justify-center px-4 text-gray-500">Loading product...</div>;
  }

  return (
    <div className="bg-gray-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex h-72 w-full items-center justify-center rounded-xl bg-gray-50 p-6 sm:h-96 lg:w-1/2">
          <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
        </div>
        <div className="flex w-full flex-col lg:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">{product.category}</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">{product.title}</h1>
          <p className="mt-5 text-2xl font-bold text-gray-900">${Number(product.price).toFixed(2)}</p>
          <p className="mt-5 leading-7 text-gray-600">{product.description}</p>
          <button onClick={addToCart} className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-fit">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
