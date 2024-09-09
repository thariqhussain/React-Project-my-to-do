// This commit is made for email changing purpose and checking email is changed or not

import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import FormFill from './components/FormFill/FormFill';

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <button onClick={handleClick} > Create a Task </button>
        { showForm ? <FormFill /> : <MainPage /> }
      </header>
    </div>
  );
}

export default App;
