import React from 'react';

const SidebarLink = ({ text }) => (
    <a href="#" className="flex items-center p-2 text-white hover:bg-blue-700">
        <span className="ml-3">{text}</span>
    </a>
);

export default SidebarLink;
