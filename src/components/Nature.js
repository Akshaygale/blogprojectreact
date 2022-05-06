import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";

const Nature = () => {

  const [tolly, setTolly] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendofblogproject.herokuapp.com/api/blog")
      .then((res) => {
        setTolly(res.data);
      });
  }, []);
  
    return (
      <div>
        <h1 className="tollyh">Nature</h1><hr className="thhr"/>
        {tolly.filter((render)=>render.id>12&&render.id<17).map((wood) => (
          <div key={tolly.imgt} className="tolly">
            <Link to={`/nature/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <div className="tollyn"><h5>{wood.date}</h5></div>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg" className="adv" alt="" /></div><br/>
        <Bottom/>
      </div>
    );
  };
  
  export default Nature;