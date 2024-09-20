import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CategoryButton = ({ isOpen, toggle, categoryName }) => (
    <button
        onClick={toggle}
        className="w-full bg-gray-100 text-left p-2 rounded flex justify-between items-center"
    >
        {categoryName}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>
);

const CategorySidebar = ({ isCategoryOpen, toggleCategory }) => (
    <div className="w-64 bg-white p-4 rounded shadow">
        <button className="w-full bg-gray-200 text-left p-2 rounded mb-4">
            View All Categories
        </button>
        <div className="space-y-2">
            {Object.keys(isCategoryOpen).map((cat) => (
                <CategoryButton
                    key={cat}
                    isOpen={isCategoryOpen[cat]}
                    toggle={() => toggleCategory(cat)}
                    categoryName={cat.charAt(0).toUpperCase() + cat.slice(1)}
                />
            ))}
        </div>
    </div>
);

export default CategorySidebar;
