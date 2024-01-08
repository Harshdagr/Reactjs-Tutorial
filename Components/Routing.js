import React from 'react'
// import Contact from './contact';
import { Route , BrowserRouter as Router, Routes} from "react-router-dom";
import Header from './header';
// import About from './About';

function Routing() {

  return (
    <React.Fragment>
      <Router>
      <Routes>
        
          <Route path="/" element={<Header/>}></Route>
          {/* <Route path="/contact" Component={Contact}></Route> */}
          {/* <Route path="/aboutus" Component={About} ></Route> */}
        </Routes>
      </Router>
    </React.Fragment>
  )

}




export default Routing;

