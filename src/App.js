import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <Navbar/> 
        <QuoteForm/> 
        <QuoteCard character="Nelson Muntz" alt="Nelson Muntz" image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"/>
        <QuoteCard character="Bart" alt="Bart" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrXf0sDmW8T70086M7oikd6w1ANVgaqSGe4QRjv_Cq0NjU3dx"/>
        <QuoteList/>
      </header>
      
    </div>
  );
}

export default App;
