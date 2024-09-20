import React from 'react';
// import Sidebar from '../components/Sidebar/Sidebar';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="text-2xl font-bold text-blue-900">For Requisitions</div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
