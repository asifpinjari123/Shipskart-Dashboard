import React, { useState } from "react";
import Header from "./components/Header/Header";
import CategorySidebar from "./components/CategorySidebar/CategorySidebar";
import ProductTable from "./components/Product/ProductTable";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import { FaExclamationCircle, FaSearch } from "react-icons/fa";

const App = () => {
  const [category, setCategory] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState({
    deck: false,
    electrical: false,
    engine: false,
    galley: false,
    lubes: false,
    medicine: false,
    paints: false,
    provisions: false,
  });

  const toggleCategory = (categoryName) => {
    setIsCategoryOpen(prevState => ({
      ...prevState,
      [categoryName]: !prevState[categoryName]
    }));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="flex space-x-6">
          {/* Sidebar Categories */}
          <CategorySidebar
            isCategoryOpen={isCategoryOpen}
            toggleCategory={toggleCategory}
          />

          {/* Main Panel */}
          <div className="flex-1">
            <div className="bg-white p-4 rounded shadow mb-6">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
                    Preferred Category for Cart
                  </label>
                  <select
                    className="w-full p-2 border rounded"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {/* Add more options here */}
                  </select>
                </div>
                <div className="bg-orange-100 p-4 rounded shadow ml-4 w-64">
                  <div className="flex items-center">
                    <FaExclamationCircle className="text-orange-500 text-2xl mr-4" />
                    <div>
                      <div className="text-orange-700 font-bold">
                        Can't find the product in our catalogue?
                      </div>
                      <div className="text-orange-700">
                        Place a request with us and we will get it delivered to you.
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                    Add Request
                  </button>
                </div>
              </div>

              <div className="text-gray-700 font-bold mb-2">
                All Categories / 10,000+ Products
              </div>

              <div className="flex items-center mb-4">
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Search any items by name or code"
                />
                <FaSearch className="ml-2 text-gray-500" />
              </div>

              <div className="text-gray-500 mb-4">1 - 10 of 10000</div>

              <ProductTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
