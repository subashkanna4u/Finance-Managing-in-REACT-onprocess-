import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search()
{
    const [searchvalue,setSearchValue]=useState()
    const [foundobject, setFoundobject]=useState()
    const [visible, setVisible]=useState('none')
    const [imagevisible, setImagevisible]=useState('block')
    const navigate = useNavigate()

    
    const storedarray = JSON.parse(localStorage.getItem('array'));
    console.log(storedarray)
    
    function handleSearch(event)
    {
        event.preventDefault()
       const findobject= storedarray.find(findobject=>findobject.Loan_ID === searchvalue)
       setFoundobject(findobject)
       console.log(findobject)
       setVisible('block')
       setImagevisible('none')  
    }
    localStorage.setItem("foundobject",JSON.stringify(foundobject))
    console.log(foundobject)

    function handleentry(el){
        el.preventDefault();
        navigate("./Monthlyentry")
    }
        

    return(
        <div>
            <div id="backcolortwo">
       <div>
        <form id="form">
            <label htmlFor="searchbox"  id="searchlabel">SEARCH</label>
            <input type="search" value={searchvalue} onChange={(event)=>setSearchValue(event.target.value)} placeholder=" Loan ID" name="loan_id" id="searchbox"/>
            <input type="submit" id="submitbutt" value="SUBMIT" onClick={handleSearch}/>
            
        </form>
       </div>
       <div>
        <div id="imagedivtwo"><img src="./images/pngwing.com.png" style={{display:imagevisible}} alt="" id="twobank"/></div>
       <div id="datastwo" style={{display:visible}}>
        <form id="editform" >
          <button id="butedit" type="button">EDIT PROFILE </button>
          </form>
          <form id="entryform" onClick={handleentry}>
          <button id="butentry" type="button">MONTHLY ENTRY</button>
        </form>
        <div>
        {foundobject ? (
        <div id="posmis">
            <h4 className="leftheadtwo">Customer Name <span className="semicolantwo">:</span> 
            <span id="nametwo">{foundobject.Name}</span></h4>
            <h4 className="leftheadtwo">Father's / Husband's Name <span className="semicolantwo">:</span> <span id="fathersnametwo">{foundobject.Father_or_Husband_name}</span></h4>
            <h4 className="leftheadtwo">Loan Amount <span className="semicolantwo">:</span> <span id="loanlinktwo">{foundobject.Loan_Amount}</span></h4>
            <h4 className="leftheadtwo">Loan ID <span className="semicolantwo">:</span> <span id="loanidlinktwo">{foundobject.Loan_ID}</span></h4>
            <h4 className="leftheadtwo">Disposement Date <span className="semicolantwo">:</span> <span id="disposeidlinktwo">{foundobject.Disposement_Date}</span></h4>
            <h4 className="leftheadtwo">Loan Months <span className="semicolantwo">:</span> <span id="monthidlinktwo">{foundobject.Loan_Months}</span></h4>
            <h4 className="leftheadtwo">EMI <span className="semicolantwo">:</span> <span id="emiidlinktwo">{foundobject.EMI_Months}</span></h4>
            <h4 className="leftheadtwo">Address <span className="semicolantwo">:</span> <span id="addreslink11two">{foundobject.Customer_Address_Line_1}</span></h4>
            <h4> <span className="semicolantwo">:</span><span id="addreslink22two">{foundobject.Customer_Address_Line_2}</span></h4>
            <h4> <span className="semicolan22two">:</span><span id="addreslink33two">{foundobject.Customer_Address_Line_3}</span></h4>
            <h4 className="lefthandtwo">Job <span className="semicolantwo">:</span> <span id="joblinktwo">{foundobject.Customer_Job}</span></h4>
            <h4 className="leftheadtwo">Job Address <span className="semicolantwo">:</span> <span id="jobofflinktwo">{foundobject.Customer_office_Name}</span></h4>
            <h4 ><span className="semicolantwo">:</span> <span id="jobaddlink11two">{foundobject.Customer_Job_Address_Line_1}</span></h4>
            <h4 ><span className="semicolan22two">:</span> <span id="jobaddlink22two">{foundobject.Customer_Job_Address_Line_2}</span></h4>
            <h4 className="leftlabeltwo">Salary <span className="semicolantwo">:</span> <span id="salarylinktwo">{foundobject.Customer_Salary}</span></h4>
            <h4 className="leftheadtwo">Contact Number 1 <span className="semicolantwo">:</span> <span id="contactlink11two">{foundobject.Customer_Contact_Number_1}</span></h4>
            <h4 className="leftheadtwo">Contact Number 2 <span className="semicolantwo">:</span> <span id="contactlink22two">{foundobject.Customer_Contact_Number_2}</span></h4>
            <h4 className="leftheadtwo">BALANCE <span className="semicolantwo">:</span> <span id="balanceidlinktwo"></span></h4>  
       </div>
        ):(<p id="itemnot">ITEM NOT FOUND</p>)}
       </div>
      </div>
      </div>
    </div>
        </div>
    )
}
export default Search;