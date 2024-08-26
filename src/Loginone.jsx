import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginone()
{
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const [visible,setVisible]=useState('hidden')
  const navigate= useNavigate()

  function handlesubmit(el){
  el.preventDefault();
  console.log(username,password);
  
    if (username === "admin" && password === "admin") {
      // Redirect to main page if login is successful
      navigate("/Sampleone");}
      else if(username !== "admin" || password !== "admin"){
        setVisible('visible')
      }
    
  }
    return(
<div>
<div id="enna">
      <div id="floatleftone">
        <h1 id="heading">JAYAM FINANCE SERVICES</h1>
        <p class="address">Reg.No : FR/Dgl/45/2022</p>
        <p class="address">
          sithar Complex, Aarthi Theater Road, Shifa Hospital OPP,
        </p>
        <p class="address">DINDIGUL, 624001 | CELL : 9629269967</p>
        <img src="./images/pngtree.png" alt="" id="bankimg" />
        <h1 id="quotes">LET'S START THE JOURNEY...</h1>
      </div>
      <div id="floatrightone">
        <h2 id="welcome">WELCOME</h2>
        <img src="./images/login.png" alt="" id="loginimg" />
        <form id="flexthreetwo" onSubmit={handlesubmit}>
          <label htmlFor="user" id="userstyle"> USER NAME</label>
          <input
            type="text"
            name="username"
            id="user"
            value={username}
            placeholder=" user name"
            required
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <p id="incorrectuser" style={{visibility:visible}}>Invalid USERNAME</p>
          

          <label htmlFor="pass" id="passstyle"> PASSWORD</label>
          <input
            type="password"
            name="password"
            id="pass"
            value={password}
            placeholder=" password"
            required
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <p id="incorrectpass" style={{visibility:visible}}>Invalid PASSWORD</p>
          <input type="submit" id="sub22"/>
        </form>
        <i class="fa-solid fa-eye-slash" onclick="show()"></i>
      </div>
    </div>
</div>
    );
}
export default Loginone;
