import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import CategorieDetails from "./pages/CategorieDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar
          search={search}
          setSearch={setSearch}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products search={search} />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Contact" element={<Contact />} />
            <Route
              path="/Cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            <Route
              path="/CategorieDetails/:categorie"
              element={<CategorieDetails />}
            />
            <Route
              path="/Login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
