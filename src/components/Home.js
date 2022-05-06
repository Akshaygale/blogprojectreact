import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {

  const [tolly, setTolly] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendofblogproject.herokuapp.com/api/blog")
      .then((res) => {
        setTolly(res.data);
      });
  }, []);

  return (
    <div className="h1">
      <div className="grid1">
        <Link to="/nature/13" className="one"><img className="imageslink" src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /><div className="onet"> Nature is Everything </div></Link>
        {tolly.filter((disp)=>disp.id==="10").map((job)=>(<Link to={`/jobs/${job.id}`} className="two"><img src={job.img} alt="" height={"250px"} width={"480px"}/><div className="twot">Rustom<br />  Akshay new movie </div></Link>))}
        {tolly.filter((disp)=>disp.id==="5").map((tec)=>(<Link to={`/technology/${tec.id}`} className="three"><img src={tec.img} alt="" /><div className="threet"> IOT <br/> Series </div></Link>))}
      </div>
      
      <div>
        <div>Recent News</div>
        <hr className="hlhr"/>
        <div className="flex2">
          <div className="hc1">
            {tolly.filter(data=>data.id==="1").map((latest)=>(
            <Link to={`/tollywood/${latest.id}`}  key={tolly.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
              <div className="c1h4"><h4>tolly: {latest.tolly}</h4></div>
            </Link>
           ))}
          </div>
          <div className="hc1">
           {tolly.filter(data=>data.id==="5").map((latest)=>(
             <Link to={`/technology/${latest.id}`}  key={tolly.id} className="hcc1">
                <div className="himg"><img src={latest.img} alt="" /></div>
                <div className="c1h3"><h3>{latest.det}</h3></div>
                <div className="c1h5"><h5>{latest.date}</h5></div>
                <div className="c1h4"><h4>tolly: {latest.tolly}</h4></div>
            </Link>
           ))}
          </div>
            <div className="hc1">
              {tolly.filter(data=>data.id==="9").map((latest)=>(
                <Link to={`/jobs/${latest.id}`}  key={tolly.id} className="hcc1">
                  <div className="himg"><img src={latest.img} alt="" /></div>
                  <div className="c1h3"><h3>{latest.det}</h3></div>
                  <div className="c1h5"><h5>{latest.date}</h5></div>
                  <div className="c1h4"><h4>tolly: {latest.tolly}</h4></div>
                </Link>
              ))}
           </div><br/>
          </div>
          <div style={{marginLeft:"-8.5%",marginTop:"2%"}}><Footer/></div>
        <div className="flex3">
        <div className="advs" ><img src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/226524/Radhe_Shyam-v1.jpg" className="advr" alt="" /></div><br/>
            
            <div>Latest Articles</div>
            <hr className="hlhr"/>
            <div className="hc2">
            {tolly.filter(data=>data.id==="2").map((latest)=>(
              <Link to={`/tollywood/${latest.id}`}  key={tolly.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>tolly: {latest.tolly}</h4></div>
            </Link>
          ))}
          </div><hr className="f50per"/>
          <div className="hc2">
          {tolly.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/technology/${latest.id}`}  key={tolly.id} className="hcc2">
            <div className="tollyi"><img src={latest.img} alt="" /></div>
            <div className="tollyt"><h3>{latest.det}</h3></div>
            <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>tolly: {latest.tolly}</h4></div>
          </Link>
          ))}
            </div><hr className="f50per"/>
            <div className="hc2">
            {tolly.filter(data=>data.id==="12").map((latest)=>(
            <Link to={`/nature/${latest.id}`} key={tolly.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
              <div className="c1h7"><h4>tolly: {latest.tolly}</h4></div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;