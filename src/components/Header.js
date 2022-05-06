import React from "react";
import { NavLink } from "react-router-dom";
import "./Background.css"
const Header = () => {
  return (
    <div>
      <div className="ht1">
        <div className="ht11">The</div>
        <span className="ht12">Siren</span>
      </div>
      <div className="flex1">
          <div><NavLink to="/home" style={({ isActive }) => { return {color: isActive ? "darkred" : "Black",textDecoration: "none",} }}> Home </NavLink></div>    
          <div><NavLink to="/tollywood" style={({ isActive }) => { return {color: isActive ? "darkred" : "Black",textDecoration: "none",} }}> Tollywood </NavLink></div>
          <div><NavLink to="/technology" style={({ isActive }) => { return {color: isActive ? "darkred" : "Black",textDecoration: "none",} }}> Technology </NavLink></div>    
          <div><NavLink to="/bollywood" style={({ isActive }) => { return {color: isActive ? "darkred" : "Black",textDecoration: "none",} }}> Bollywood </NavLink></div>
          <div><NavLink to="/nature" style={({ isActive }) => { return {color: isActive ? "darkred" : "Black",textDecoration: "none",} }}> Nature </NavLink></div>    
      </div>
      <hr />
    </div>
  );
};

export default Header;