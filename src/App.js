import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Naruto from './components/Naruto';
import Sasuke from './components/Sasuke';

function App() {
  return (
      <div className="App">
        <Router>
            <Routes>
                <Route path="/Naruto" element={<Naruto></Naruto>} />
                <Route path="/Sasuke" element ={<Sasuke></Sasuke>}/>
            </Routes>
           </Router>

      </div>
  );
}

export default App;
