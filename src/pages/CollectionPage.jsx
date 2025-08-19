import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import nmadur from "../assets/nmadur.png";

const CollectionPage = () => {
  const [open, setOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]); // исходные данные
  const [products, setProducts] = useState([]); // отфильтрованные
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    price: "",
    brand: "",
    sort: "",
  });

  // Запрос к API
  useEffect(() => {
    fetch("https://mocki.io/v1/b86e39da-6b90-4c85-ab0b-942f5a3ade80")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data); // при загрузке сразу выводим всё
      })
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  // применение фильтров
  useEffect(() => {
    let filtered = [...allProducts];

    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    if (filters.type) {
      filtered = filtered.filter((p) => p.type === filters.type);
    }

    if (filters.brand) {
      filtered = filtered.filter((p) => p.brand === filters.brand);
    }

    if (filters.price === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.price === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (filters.sort === "newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filters.sort === "oldest") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setProducts(filtered);
  }, [filters, allProducts]);

  return (
    <div>
      {/* Header */}
      <header className="w-full">
        <nav className="flex items-center justify-between px-6 py-4">
          <IoMdSearch className="text-2xl cursor-pointer" />
          <Link to="/" className="text-[24px] font-bold">
            Avion
          </Link>
          <div className="hidden md:flex items-center gap-6 text-2xl">
            <MdOutlineLocalGroceryStore className="cursor-pointer" />
            <CgProfile className="cursor-pointer" />
          </div>
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>

        <hr className="border-gray-200" />

        {/* Desktop меню */}
        <ul className="hidden md:flex items-center justify-center gap-10 mt-6 mb-10">
          <li className="hover:text-purple-950 cursor-pointer">Plant pots</li>
          <li className="hover:text-purple-950 cursor-pointer">Ceramics</li>
          <li className="hover:text-purple-950 cursor-pointer">Tables</li>
          <li className="hover:text-purple-950 cursor-pointer">Chairs</li>
          <li className="hover:text-purple-950 cursor-pointer">Crockery</li>
          <li className="hover:text-purple-950 cursor-pointer">Tableware</li>
          <li className="hover:text-purple-950 cursor-pointer">Cutlery</li>
        </ul>

        {/* Mobile меню */}
        {open && (
          <ul className="flex flex-col items-center gap-6 mt-4 mb-6 md:hidden">
            <li className="hover:text-purple-950 cursor-pointer">Plant pots</li>
            <li className="hover:text-purple-950 cursor-pointer">Ceramics</li>
            <li className="hover:text-purple-950 cursor-pointer">Tables</li>
            <li className="hover:text-purple-950 cursor-pointer">Chairs</li>
            <li className="hover:text-purple-950 cursor-pointer">Crockery</li>
            <li className="hover:text-purple-950 cursor-pointer">Tableware</li>
            <li className="hover:text-purple-950 cursor-pointer">Cutlery</li>
          </ul>
        )}
      </header>

      {/* Баннер */}
      <div className="relative">
        <img
          src={nmadur}
          alt="Background"
          className="w-full h-[209px] object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Our Products
          </h1>
        </div>
      </div>

      {/* Фильтрация */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center justify-between text-sm text-gray-600">
        <div className="flex gap-6">
          <select
              className="border rounded px-3 py-1"
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            >
              <option value="">Category</option>
              <option value="vase">Vase</option>
              <option value="lamp">Lamp</option>
              <option value="sofa">Sofa</option>
            </select>

          <select
            className="border rounded px-3 py-1"
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">Product type</option>
            <option value="chair">Chair</option>
            <option value="table">Table</option>
          </select>

          <select
            className="border rounded px-3 py-1"
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          >
            <option value="">Price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>

          <select
            className="border rounded px-3 py-1"
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          >
            <option value="">Brand</option>
            <option value="ikea">IKEA</option>
            <option value="hm">H&M</option>
          </select>
        </div>

        <div>
          <span className="text-gray-500 mr-2">Sorting by:</span>
          <select
            className="border rounded px-3 py-1"
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          >
            <option value="">Date added</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Список товаров */}
      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="mt-2 font-semibold">{p.title}</h2>
              <p className="text-gray-500">{p.brand}</p>
              <p className="font-bold">${p.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
