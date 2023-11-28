import React, { useEffect } from 'react';
import Home from './pages/Home';
import './scss/app.scss';
import { TextInput } from './components/FormElements';

function App() {
  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default App;
