import Sidebar from './sidebar';
import Header from './header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#0000000F] gap-2">
      <Sidebar />
      <div className="flex-2">
        <Header />
        <main className="pt-4 overflow-auto">
          <Outlet /> {/* This renders the matching child route (like Dashboard) */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
