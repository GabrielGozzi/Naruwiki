import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Naruto from "./Naruto";
import Sasuke from "./Sasuke";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route component={Naruto} path="/Naruto" exact />
                <Route component={Sasuke} path="/Sasuke" />
            </Routes>
           </Router>

    )
}
export default AppRoutes;