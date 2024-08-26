import React, { useState } from "react";


function Newapp()
{
  const [input,setInput]=useState()
  const [array, setArray]=useState([])
  
  function handlechange(e)

  {
  const name = e.target.name;
  const value = e.target.value;
  setInput((prevstate)=>({...prevstate,[name]:value}))
  }

  function handlesubmit(el)
  {
    el.preventDefault();
    setArray((prevstate)=> [...prevstate,input])
    }
    localStorage.setItem('array',JSON.stringify(array))
    console.log(array)
    
      
    return(
        <div>
            <div>
      <div id="backcolorone">
        <div id="headerone">
          <h1 id="headingone">JAYAM FINANCE SERVICES</h1>
          <p className="addressonee">Reg.No : FR/Dgl/45/2022</p>
          <p className="addressonee">
            sithar Complex, Aarthi Theater Road, Shifa Hospital OPP,
          </p>
          <p className="addressonee">DINDIGUL, 624001 | CELL : 9629269967</p>
          <h2 id="detailsoneee">CUSTOMER DETAILS</h2>
          <button type="button" id="hideedit">EDIT</button>
          </div>
        <div id="formflexonee">
          <form id="formonee" onSubmit={handlesubmit}>
            <div id="fullnameone">
              <label htmlFor="nameonee">Customer Name</label>
              <input
                type="text"
                name="Name"
                placeholder=" Customer Name"
                id="nameonee"
                onChange={handlechange}
              />
            </div>
            <div id="fnameone">
              <label htmlFor="fathersnameone">Father's / Husband's Name</label>
              <input
                type="text"
                name="Father_or_Husband_name"
                placeholder=" Father's / Husband's Name"
                id="fathersnameone"
                onChange={handlechange}
              />
            </div>
            <div id="amountlabelone">
              <label htmlFor="loanlinkone">Loan Amount</label>
              <input type="text" 
              name="Loan_Amount" id="loanlinkone"
              placeholder=" Loan Amount"
              onChange={handlechange} />
            </div>
            <div id="loanidlabelone">
              <label htmlFor="loanidlinkone">Loan ID</label>
              <input type="text" 
              name="Loan_ID" id="loanidlinkone"
              placeholder=" Loan ID" 
              onChange={handlechange}/>
            </div>
            <div id="disposeidlabelone">
              <label htmlFor="disposeidlinkone">Disposement Date</label>
              <input type="date"
              name="Disposement_Date" id="disposeidlinkone"
              onChange={handlechange}  />
            </div>
            <div id="monthidlabelone">
              <label htmlFor="monthidlinkone">Loan Months</label>
              <input type="text" 
              name="Loan_Months" id="monthidlinkone" placeholder=" How many months"
              onChange={handlechange}/>
            </div>
            <div id="emiidlabelone">
              <label htmlFor="emiidlinkone">EMI</label>
              <input type="text" 
              name="EMI_Months" id="emiidlinkone" placeholder=" Equated Monthly Installment (EMI)"
              onChange={handlechange}/>
            </div>
            <div id="addresslabelone">
              <label htmlFor="addreslink11one">Address</label>
              <input
                type="text"
                name="Customer_Address_Line_1"
                id="addreslink11one"
                placeholder=" Address Line 1"
                onChange={handlechange}
              />
            </div>
            <div>
              <input
                type="text"
                name="Customer_Address_Line_2"
                id="addreslink22one"
                placeholder=" Address Line 2"
                onChange={handlechange}
              />
            </div>
            <div>
              <input
                type="text"
                name="Customer_Address_Line_3"
                id="addreslink33one"
                placeholder=" Address Line 3"
                onChange={handlechange}
              />
            </div>
            <div id="joblabelone">
              <label htmlFor="joblinkone">Job</label>
              <input type="text" name="Customer_Job" placeholder=" Job" id="joblinkone"
              onChange={handlechange} />
            </div>
            <div id="jobofflabelone">
              <label htmlFor="jobofflinkone">Job Address</label>
              <input
                type="text"
                name="Customer_office_Name"
                id="jobofflinkone"
                placeholder=" Office Name"
                onChange={handlechange}
              />
            </div>
              <div>
                <input
                  type="text"
                  name="Customer_Job_Address_Line_1"
                  id="jobaddlink11one"
                  placeholder=" Office Address line 1"
                  onChange={handlechange}/>
              </div>
              <div>
                <input
                  type="text"
                  name="Customer_Job_Address_Line_2"
                  id="jobaddlink22one"
                  placeholder=" Office Address line 2"
                  onChange={handlechange}/>
              </div>
               <div id="salarylabelone">
              <label htmlFor="salarylinkone">Salary</label>
              <input
                type="text"
                name="Customer_Salary"
                id="salarylinkone"
                placeholder=" Salary"
                onChange={handlechange}/>
            </div>
            <div id="contactlabelone">
              <label htmlFor="contactlink11one">Contact Number 1</label>
              <input
                type="text"
                name="Customer_Contact_Number_1"
                id="contactlink11one"
                placeholder=" Contact Number 1"
                onChange={handlechange}/>
              </div>
              <div id="contactlabel22one">
              <label htmlFor="contactlink22one">Contact Number 2</label>
              <input
                type="text"
                name="Customer_Contact_Number_2"
                id="contactlink22one"
                placeholder=" Contact Number 1"
                onChange={handlechange}/>
            </div>
            <div id="photolabelone">
              <label htmlFor="cusphotoone">Upload Photo</label>
              <input type="file" name="Customer_Photo" id="cusphotoone" accept="image/*" onChange={handlechange}/>
              </div>
              <div id="aadarlabelone">
                <label htmlFor="cusaadarone">Upload Aadar</label>
                <input type="file" name="Customer_aadar" id="cusaadarone" accept="image/*" onChange={handlechange}/>
                </div>
                <div id="workinglabelone">
                  <label htmlFor="cusworkone">Upload Working ID</label>
                  <input type="file" name="Customer_working_id" id="cusworkone" accept="image/*" onChange={handlechange}/>
                  </div>
                  <div id="submitdivoneee">
                    <input type="submit" value="SAVE"  id="submitbuttoneee"/>
                  </div>
            </form>
            </div>   
        </div>
      </div>
        </div>
    )
}
export default Newapp;