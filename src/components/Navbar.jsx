import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ search, setSearch, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/Login");
  };

  const loginPage = () => {
    setMenuOpen(false);
    navigate("/Login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Products" },
    { name: "Categories", path: "/Categories" },
    { name: "Contact", path: "/Contact" },
    { name: "Cart", path: "/Cart" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            🛒 Prime<span className="text-blue-600">Cart</span>
          </Link>

          <ul className="hidden items-center gap-5 text-sm font-semibold text-gray-700 xl:flex 2xl:gap-7">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="transition hover:text-blue-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 xl:flex">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-44 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 2xl:w-56"
            />
            {isLoggedIn ? (
              <button onClick={logout} className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700">
                Logout
              </button>
            ) : (
              <button onClick={loginPage} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Login
              </button>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl text-gray-800 transition hover:bg-gray-100 xl:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-3 border-t border-gray-200 pt-3 xl:hidden">
            <ul className="flex flex-col gap-1 font-semibold text-gray-700">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 transition hover:bg-blue-50 hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-3 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            {isLoggedIn ? (
              <button onClick={logout} className="mt-3 w-full rounded-lg bg-red-600 py-2.5 font-semibold text-white hover:bg-red-700">
                Logout
              </button>
            ) : (
              <button onClick={loginPage} className="mt-3 w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700">
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
