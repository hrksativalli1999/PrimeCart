import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-[70vh] bg-gray-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Your selection
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-gray-600">
            Review your products and order total.
          </p>
        </div>

        {cart.length > 0 ? (
          <div className="flex flex-col items-start gap-6 lg:flex-row">
            <section className="w-full space-y-4 lg:flex-1">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5"
                >
                  <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-lg bg-gray-50 p-3 sm:h-28 sm:w-28">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold leading-6 text-gray-900">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-gray-600">
                      ${Number(item.price).toFixed(2)} each
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label="Decrease quantity"
                          className="px-3 py-1.5 text-lg text-gray-700 transition hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="min-w-10 px-2 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          aria-label="Increase quantity"
                          className="px-3 py-1.5 text-lg text-gray-700 transition hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-sm font-semibold text-red-600 transition hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="text-lg font-bold text-gray-900 sm:min-w-24 sm:text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </article>
              ))}
            </section>

            <aside className="w-full rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24 lg:w-80">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4 text-gray-600">
                  <span>Products</span>
                  <span className="font-medium text-gray-900">
                    {cart.length}
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-gray-600">
                  <span>Total quantity</span>
                  <span className="font-medium text-gray-900">
                    {totalQuantity}
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between gap-4 text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-xs leading-5 text-gray-500">
                This is a demo order summary. Checkout is not connected yet.
              </p>
            </aside>
          </div>
        ) : (
          <div className="rounded-xl border border-gray-100 bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
              🛒
            </div>
            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Add a few products and they will appear here.
            </p>
            <Link
              to="/Products"
              className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
