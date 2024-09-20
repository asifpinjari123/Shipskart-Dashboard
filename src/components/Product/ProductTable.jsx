import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const ProductRow = ({ name, subcategory, code }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <tr>
      <td className="py-2 px-4 border text-blue-600">{name}</td>
      <td className="py-2 px-4 border">{subcategory}</td>
      <td className="py-2 px-4 border">{code}</td>
      <td className="py-2 px-4 border">Pcs</td>
      <td className="py-2 px-4 border flex items-center justify-center">
        <button
          className="bg-gray-200 px-2 py-1 rounded"
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
        >
          -
        </button>
        <input className="w-12 text-center border mx-2" type="text" value={quantity} readOnly />
        <button className="bg-gray-200 px-2 py-1 rounded" onClick={() => setQuantity((prev) => prev + 1)}>
          +
        </button>
      </td>
    </tr>
  );
};

const ProductTable = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border rounded">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="py-2 px-4 border">Name</th>
          <th className="py-2 px-4 border">Subcategory</th>
          <th className="py-2 px-4 border">Product Code</th>
          <th className="py-2 px-4 border">Unit - Pack Size</th>
          <th className="py-2 px-4 border">Qty</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow name="Anchor" subcategory="Deck" code="AN001" />
        <ProductRow name="Bolt" subcategory="Deck" code="BL002" />
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
