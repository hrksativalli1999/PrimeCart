import CategorieCard from "../components/CategorieCard";
import Men from "../assets/Mens.avif";
import Women from "../assets/Womens.avif";
import Jewelry from "../assets/Jewelry.avif";
import Electronic from "../assets/Electronic.avif";

const Categories = () => {
  return (
    <div className="min-h-[70vh] bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Find your style</p>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Explore Categories</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">Discover products from our exclusive collections.</p>
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-5 sm:gap-7 lg:gap-8">
          <CategorieCard categorie="men's clothing" image={Men} />
          <CategorieCard categorie="women's clothing" image={Women} />
          <CategorieCard categorie="jewelery" image={Jewelry} />
          <CategorieCard categorie="electronics" image={Electronic} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
