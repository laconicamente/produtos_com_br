import './styles.css';
import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
