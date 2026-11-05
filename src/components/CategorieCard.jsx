import { useNavigate } from "react-router-dom";

const CategorieCard = ({ categorie, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/CategorieDetails/${encodeURIComponent(categorie)}`);
  };

  return (
    <button onClick={handleClick} className="group w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:w-64">
      <div className="h-64 overflow-hidden bg-gray-100 sm:h-72">
        <img src={image} alt={categorie} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <h2 className="px-4 py-4 text-center text-lg font-semibold capitalize text-gray-800 group-hover:text-blue-600">
        {categorie}
      </h2>
    </button>
  );
};

export default CategorieCard;
