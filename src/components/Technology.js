import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";


const Technology = () => {

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
      <h1 className="tollyh">Technology</h1><hr className="thhr"/>
      {tolly.filter((render)=>render.id>4 && render.id<9).map((tec) => (
        <div key={tolly.id} className="tolly">
          <Link to={`/technology/${tec.id}`} className="tolly">
          <div className="tollyi"><img src={tec.img} alt="" /></div>
          <h3 className="tollyt">{tec.det}</h3>
          </Link>
          <h5 className="tollyd">{tec.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://www.isd.co.th/wp-content/uploads/2018/08/ai.jpg" className="adv" alt="" /></div><br/>
      <Bottom/>
    </div>
  );
};

export default Technology;