import { useState, useEffect } from "react";
import Fetch from "../services/Fetch";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Fetch().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <main className="pt-18">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-5 py-16 text-center sm:px-10 sm:py-20 lg:px-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <span className="text-blue-700 font-semibold text-sm sm:text-base tracking-widest uppercase">
            Welcome to PrimeCart
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mt-4 mb-5 leading-tight">
            Shop Everything You Love
          </h1>

          <p className="text-gray-600 text-sm sm:text-lg mb-3">
            Discover great products at great prices.
          </p>

          <p className="text-gray-500 text-sm sm:text-base">
            Quality Products. Best Prices.
          </p>

          <button
            onClick={() => navigate("/Products")}
            className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700 sm:text-lg"
          >
            Shop Now →
          </button>
        </div>
      </section>

      {/* Trending Products */}
      <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
          Trending Products 📈
        </h2>

        <div className="flex flex-wrap justify-center items-stretch gap-5 sm:gap-7">
          {items
            .filter((item) => item.id % 2 === 0 && item.id < 10)
            .map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="bg-gray-50 px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
          Top Rated Products ⭐
        </h2>

        <div className="flex flex-wrap justify-center items-stretch gap-5 sm:gap-7">
          {items
            .filter((item) => item.id % 2 === 0 && item.id > 6)
            .map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
          New Arrivals 🆕
        </h2>

        <div className="flex flex-wrap justify-center items-stretch gap-5 sm:gap-7">
          {items
            .filter((item) => item.id % 2 !== 0 && item.id < 10)
            .map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
