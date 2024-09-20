import React from 'react';
import { FaShoppingCart, FaBell, FaComments, FaChevronDown } from 'react-icons/fa';

const Header = () => (
    <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold text-blue-900">For Requisitions</div>
        <div className="flex items-center space-x-10">
            <FaShoppingCart className="text-xl" />
            <FaBell className="text-xl relative">
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">44</span>
            </FaBell>
            <FaComments className="text-xl" />
            <div className="flex items-center space-x-2">
                <span>Hello,</span>
                <span className="font-bold">Capt Stybarrow</span>
                <FaChevronDown />
            </div>
        </div>
    </div>
);

export default Header;
