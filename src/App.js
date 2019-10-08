import React from 'react';
import Navbar from './components/Navbar';
import QuoteCards from './components/QuoteCard';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <QuoteCard/>
        <img src="" className="App-logo" alt="logo" />
        <p>
          stan the best.
        </p>
     
      </header>
    </div>
  );
}

export default App;
