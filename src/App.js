import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentOne from './Components/Component/ComponentOne'
import { UseProviderThree } from './Components/Component/MainComponent';
import { UseProviderFive } from './Components/Component/MainComponent';

function App() {
  return (
    <div className="App">
      <UseProviderThree value="Context Three">
        <ComponentOne />
      </UseProviderThree>
      
      <UseProviderFive value="Context Five">
        <ComponentOne />
      </UseProviderFive>
    </div>
  );
}

export default App;
