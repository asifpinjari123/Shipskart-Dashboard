import React from 'react';
import { FaTachometerAlt, FaBook, FaClipboardList, FaBox, FaInfoCircle } from 'react-icons/fa';

const SidebarLink = ({ icon, text }) => (
    <a href="#" className="flex items-center p-2 text-white hover:bg-blue-700">
        {icon}
        <span className="ml-3">{text}</span>
    </a>
);

const Sidebar = () => (
    <div className="bg-blue-900 text-white w-64 min-h-screen">
        <div className="p-4">
            <img
                src="https://shipskart.com/images/white_black.svg"
                alt="Shipskart Logo"
                width="150"
                className="mb-4"
            />
        </div>
        <nav className="space-y-2">
            <SidebarLink icon={<FaTachometerAlt />} text="Dashboard" />
            <SidebarLink icon={<FaBook />} text="Catalogue" />
            <SidebarLink icon={<FaClipboardList />} text="Requisitions" />
            <SidebarLink icon={<FaBox />} text="Orders" />
            <SidebarLink icon={<FaInfoCircle />} text="Company Info" />
        </nav>
    </div>
);

export default Sidebar;
