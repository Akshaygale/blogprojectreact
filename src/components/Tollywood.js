import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";


const Tollywood = () => {

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
      <h1 className="tollyh">TollyWood</h1><hr className="thhr"/>
      {tolly.filter((render)=>render.id<5).map((wood) => (
        <div key={tolly.id} className="tolly">
          <Link to={`/tollywood/${wood.id}`}className="tolly">
            <div className="tollyi"><img src={wood.img} alt="" /></div>
            <h3 className="tollyt">{wood.det}</h3>
          </Link>
          <h5 className="tollyd">{wood.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a52b5490524441.5e198518e7e18.png" className="adv" alt="" /></div><br/>
      <Bottom/>
    </div>
  );
};

export default Tollywood;