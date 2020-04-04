import './styles.css';
import React from 'react';
import Routes from './routes';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
