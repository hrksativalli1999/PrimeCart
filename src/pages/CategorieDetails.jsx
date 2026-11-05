import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const CategorieDetails = () => {
  const { categorie } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categorie}`)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, [categorie]);

  return (
    <div className="min-h-[70vh] bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">PrimeCart collection</p>
          <h1 className="mt-2 text-3xl font-bold capitalize text-gray-900 sm:text-4xl">{categorie}</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
          {category.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default CategorieDetails;
