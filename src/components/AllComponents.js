import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tollywood from "./Tollywood";
import Home from "./Home";
import Technology from "./Technology";
import Bollywood from "./Bollywood";
import Nature from "./Nature";
import PageNotFound from "./PageNotFound";
import ViewData from "./ViewData";

const AllComponents = () => {
  return (
    <div>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tollywood" element={<Tollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/tollywood/:id" element={<ViewData/>}/>
          <Route path="/technology/:id" element={<ViewData/>}/>
          <Route path="/jobs/:id" element={<ViewData/>}/>
          <Route path="/nature/:id" element={<ViewData/>}/>
        </Routes>
        
      </Router>
    </div>
  );
};

export default AllComponents;