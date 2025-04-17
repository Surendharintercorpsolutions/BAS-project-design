// import React, { useState } from 'react';
import Dashboard from './components/dashbaord';
import License from './components/licence';
import Announcement from './components/announcement';
import DataAnalystics from './components/dataAnalytics';
import Hardware from './components/hardware';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/sidebar';
import Header from './components/layout/header';

import './App.css'

function App() {


  return (
    <div className="min-h-screen bg-[#EEF2FF]">
      <div className="flex min-h-screen gap-3">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 pt-3 min-h-full overflow-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/data-analytics" element={<DataAnalystics />} />
              <Route path="/license" element={<License />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/hardware" element={<Hardware />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
