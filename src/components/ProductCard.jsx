import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ProductDetails/${item.id}`);
  };

  return (
    <article className="flex w-full max-w-xs flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:w-64">
      <button className="flex flex-1 flex-col text-left">
        <div className="flex h-48 w-full items-center justify-center rounded-lg bg-gray-50 p-4">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>
        <h3 className="mt-4 line-clamp-2 min-h-12 text-base font-semibold text-gray-800">
          {item.title}
        </h3>
        <p className="mt-2 text-lg font-bold text-gray-900">
          ${Number(item.price).toFixed(2)}
        </p>
      </button>
      <button
        onClick={handleClick}
        className="mt-4 flex items-center justify-between rounded-lg bg-blue-50 px-3 py-2.5 font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
      >
        <span>View Details</span>
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
};

export default ProductCard;
