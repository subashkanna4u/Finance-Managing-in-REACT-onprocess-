import React from "react";
import { useNavigate } from "react-router-dom";
function Sampleone()
{
  const navigate=useNavigate()

  function handleclick()
  {
    navigate ("/Newapp")
  }
  function handlesearch()
  {
    navigate ("/Search")
  }
    return(
          <div id="backcolor">
        <div id="floatleft">
          <img onClick={handleclick} src="./images/add-video.png" alt="" id="newapp"/>
         <h1 onClick={handleclick} id="newappword">NEW CUSTOMER</h1>
        </div>
        <div id="floatright">
          <img onClick={handlesearch} src="./images/1search.png" alt="" id="searchimg"/>
          <h1 onClick={handlesearch} id="searchword">SEARCH</h1>
        </div>
      </div>
    );
}
export default Sampleone;