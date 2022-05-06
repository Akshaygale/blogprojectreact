import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Bottom from "./Bottom";
import Footer from "./Footer";

const ViewData = () => {

  const [tolly, setTolly] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendofblogproject.herokuapp.com/api/blog")
      .then((res) => {
        setTolly(res.data);
      });
  }, []);
    const {id} =useParams();
    
    const[dataa,setDataa] =useState({ img:"",det:"",date:"",description:"",category:""})


    useEffect(() => {
        tolly.forEach((view)=>{
            if(view.id===id){
                console.log("Matched Param");
                setDataa({
                    img:view.img,
                    det:view.det,
                    date:view.date,
                    description:view.description,
                    category:view.category,
                });
            }
        });
    },)
    
    return (
        <div>
            <h1 className='vih1'>{dataa.category}</h1><hr className='thhr'/>
            {/* <div className='clap'><div className='clap1'>👏</div><h1>500</h1></div> */}
            <div className='viewD'>
            <div>
               <div className='vimg'><img src={dataa.img} alt="" /></div>
               <div className='vh3'><h3>{dataa.det}</h3></div>
               <div className='vh5'><h5>{dataa.date}</h5></div>
               <div className='vp'><p>{dataa.description}</p></div>
            </div>
            </div>
            <Bottom/><br/>
            <Footer/>
        </div>
    )
}
export default ViewData