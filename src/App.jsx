import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import CareerAdvisor from './components/CareerAdvisor';
import ResearchHubs from './components/ResearchHubs';
import './index.css';

function App() {
  return (
    <>
      {/* Dynamic Background */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* Main Content */}
      <main className="container">
        <HeroSection />
        
        <div className="section">
          <CareerAdvisor />
        </div>
        
        <div className="section">
          <ResearchHubs />
        </div>
      </main>
      
      {/* Footer */}
      <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Robert McCoy Projects. All rights reserved. <br/>
          Career Mobility Governance Framework (CMGF)
        </p>
      </footer>
    </>
  );
}

export default App;
