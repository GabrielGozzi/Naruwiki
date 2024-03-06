import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Naruto from "./Naruto";
import Sasuke from "./Sasuke";
import Home from './Home';
import NewProject from './NewProject';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route component={Home} path="/"/>
                <Route Component={NewProject} path="/NewProject" />
                <Route component={Naruto} path="/Naruto" />
                <Route component={Sasuke} path="/Sasuke" />
            </Routes>
           </Router>

    )
}
export default AppRoutes;