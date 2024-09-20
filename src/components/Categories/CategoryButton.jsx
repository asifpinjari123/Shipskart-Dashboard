import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CategoryButton = ({ isOpen, toggle, categoryName }) => (
  <button
    onClick={toggle}
    className="w-full bg-gray-100 text-left p-2 rounded flex justify-between items-center"
  >
    {categoryName}
    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
  </button>
);

export default CategoryButton;
