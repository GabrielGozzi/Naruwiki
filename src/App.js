import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Naruto from './components/Naruto';
import Sasuke from './components/Sasuke';
import Home from './components/Home';
import NewProject from './components/NewProject';

function App() {
  return (
        <Router>
          <div>
            <Link to ="/">Pagina Inicial</Link>
            <Link to ="/Naruto">Naruto</Link>
            <Link to ="/Sasuke">Sasuke</Link>
            <Link to ="/NewProject">Novo Projeto</Link>
          </div>
            <Routes>  
                <Route exact path="/"> <Home />
                </Route>
                <Route exact path="/NewProject"> <NewProject/> 
                </Route>
                <Route exact path="/Naruto"> <Naruto/> 
                </Route>
                <Route exact path="/Sasuke" > <Sasuke/> 
                </Route>
            </Routes>
            <p>Footer</p>
           </Router>  

  );
}

export default App;
