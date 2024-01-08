import React from "react";
import { BrowserRouter as Router, Link, Route , Routes } from "react-router-dom";
import About from "./About";
import Contact from "./contact";

import './style.css'

const Header = () => {
    return (
        <React.Fragment>
            <Router>
                <h1>
                    Hii , i am header functional component with props name
                </h1>
                <div className="split">
                <ul>
                
                <Link to="/contact" className="contact">Contact</Link>
                <Link to="/aboutus" className="about">About us</Link>
                {/* <h1>{this.state.ProductId}</h1> */}
                </ul>
                </div>
                
             <Routes>
                <Route path="/aboutus" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
               
                {/* <Route path="/" element={<Header/>}></Route> */}
                </Routes>
            </Router>

        </React.Fragment>
    );
};

export default Header;
