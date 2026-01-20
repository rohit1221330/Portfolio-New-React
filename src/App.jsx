// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import useWindowSize from './hooks/useWindowSize';

// Pages
import UnifiedLanding from './components/UnifiedLanding'; // <-- Bas ye naya wala import karo
import WebDevPortfolio from './pages/WebDevPortfolio';       
import DataAnalystPortfolio from './pages/DataAnalystPortfolio'; 

const App = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <Router>
      <div className={`relative z-0 ${!isMobile ? 'cursor-none' : ''}`}>
        
        {!isMobile && <CustomCursor />}

        <Routes>
          {/* Home Route ab UnifiedLanding hai */}
          <Route path="/" element={<UnifiedLanding />} />
          
          <Route path="/web-dev" element={<WebDevPortfolio />} />
          <Route path="/data-analyst" element={<DataAnalystPortfolio />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;