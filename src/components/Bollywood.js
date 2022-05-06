import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";


const Bollywood = () => {

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
        <h1 className="tollyh">Bollywood</h1><hr className="thhr"/>
        {tolly.filter((render)=>render.id>8 && render.id<13).map((wood) => (
          <div key={tolly.imgt} className="tolly">
            <Link to={`/jobs/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <h5 className="tollyd">{wood.date}</h5>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://1.bp.blogspot.com/-xyH0Qs6yPmI/Xvs0bhdcQPI/AAAAAAAAZ_s/9kRuWAaGKLoXcwq-Dz-cgswdrMV3eHYOQCLcBGAsYHQ/s1600/Bhuj-Movie-Poster.jpg" className="adv" alt="" /></div><br/>
  
        <Bottom/>
      </div>
    );
  };
  
  export default Bollywood;