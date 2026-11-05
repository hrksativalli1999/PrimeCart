import ProductCard from "../components/ProductCard";
import Fetch from "../services/Fetch";
import { useState, useEffect } from "react";

const Products = ({ search }) => {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    Fetch().then((data) => setItems(data));
  }, []);

  const filteredItems = items
    .filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((item) => showAll || item.id <= 4);

  return (
    <div className="min-h-[70vh] bg-gray-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Browse our collection</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Our Products</h1>
          <p className="mt-3 text-gray-600">Find something you'll love.</p>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-5 sm:gap-7">
          {filteredItems.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>

        {filteredItems.length === 0 && (
          <p className="py-12 text-center text-gray-500">No products found. Try another search.</p>
        )}

        {items.length > 4 && filteredItems.length > 0 && (
          <button
            className="mx-auto mt-10 block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "Show More ↓"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
