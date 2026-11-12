import React from 'react';
import './App.css';
import RegistractionForm from './new';

function App() {
  const handleDetails = (data) => {
    console.log("Form Submitted Details:", data);
  };

  return (
    <div className="App">
      <RegistractionForm onSubmit={handleDetails} />
    </div>
  );
}

export default App;
