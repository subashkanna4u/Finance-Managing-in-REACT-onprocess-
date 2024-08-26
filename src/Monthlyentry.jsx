import { useEffect, useState } from "react"

function Monthlyentry(){

    const[emione, setEmione]=useState()
    const[emitwo, setEmitwo]=useState()
    const[emithree, setEmithree]=useState('')
    const[emifour, setEmifour]=useState('')
    const[emifive, setEmifive]=useState('')
    const[emisix, setEmisix]=useState('')
    const[emiseven, setEmiseven]=useState('')
    const[emieight, setEmieight]=useState('')
    const[eminine, setEminine]=useState('')
    const[emiten, setEmiten]=useState('')

    const [visibleone, setVisibleone]=useState('none')
    const [visibletwo, setVisibletwo]=useState('none')
    const [visiblethree, setVisiblethree]=useState('none')
    const [visiblefour, setVisiblefour]=useState('none')
    const [visiblefive, setVisiblefive]=useState('none')
    const [visiblesix, setVisiblesix]=useState('none')
    const [visibleseven, setVisibleseven]=useState('none')
    const [visibleeight, setVisibleeight]=useState('none')
    const [visiblenine, setVisiblenine]=useState('none')
    const [visibleten, setVisibleten]=useState('none')

    
    const [showbal, setShowbal]=useState(null)
    const [entryobject, setEntryObject]=useState(null)
    
        useEffect(()=>{
            const getobject = JSON.parse(localStorage.getItem('foundobject'))
            console.log(getobject)
            setEntryObject(getobject)
            const bal = getobject && getobject.Loan_Amount
            setShowbal(bal)
        },[])
         
    function handlechangeone(el){
        el.preventDefault()    
        setEmione(el.target.value)
        setVisibleone('block')
    }
    function handlechangetwo(el){
        el.preventDefault()
        setEmitwo(el.target.value)
        setVisibletwo('block')
        }
    
    function handlechangethree(el){
        el.preventDefault()
        setEmithree(el.target.value)
        setVisiblethree('block')
    }
    function handlechangefour(el){
        el.preventDefault()
       setEmifour(el.target.value)
        setVisiblefour('block')
    }
    function handlechangefive(el){
        el.preventDefault()
        setEmifive(el.target.value)
        setVisiblefive('block')
    }
    function handlechangesix(el){
        el.preventDefault()
        setEmisix(el.target.value)
        setVisiblesix('block')
    }
    function handlechangeseven(el){
        el.preventDefault()
        setEmiseven(el.target.value)
        setVisibleseven('block')
    }
    function handlechangeeight(el){
        el.preventDefault()
        setEmieight(el.target.value)
        setVisibleeight('block')
    }
    function handlechangenine(el){
        el.preventDefault()
        setEminine(el.target.value)
        setVisiblenine('block')
    }
    function handlechangeten(el){
        el.preventDefault()
        setEmiten(el.target.value)
        setVisibleten('block')
    }
    
    function addnew(el){
        el.preventDefault()
    if(entryobject && emione!=='' ){
        const updateobjone ={...entryobject,Emi_1:emione}
    setEntryObject(updateobjone) 
    localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry One:', updateobjone) 
}
        
    if(entryobject && emitwo!=='' ){
        const updateobjone ={...entryobject,Emi_2:emitwo}
    setEntryObject(updateobjone) 
    localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Two:', updateobjone) 
}
if(entryobject && emithree!=='' ){
    const updateobjone ={...entryobject,Emi_3:emithree}
setEntryObject(updateobjone) 
localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Three:', updateobjone) 
}
if(entryobject && emifour!=='' ){
    const updateobjone ={...entryobject,Emi_4:emifour}
setEntryObject(updateobjone) 
localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Four:', updateobjone) 
}
if(entryobject && emifive!=='' ){
    const updateobjone ={...entryobject,Emi_5:emifive}
setEntryObject(updateobjone) 
localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Five:', updateobjone) 
}
if(entryobject && emisix!=='' ){
    const updateobjone ={...entryobject,Emi_6:emisix}
setEntryObject(updateobjone) 
localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Six:', updateobjone) 
}
if(entryobject && emiseven!=='' ){
    const updateobjone ={...entryobject,Emi_7:emiseven}
setEntryObject(updateobjone) 
localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Seven:', updateobjone) 
}
if(entryobject && emieight!=='' ){
    const updateobjone ={...entryobject,Emi_8:emieight}
setEntryObject(updateobjone) 
localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Eight:', updateobjone) 
}
if(entryobject && eminine!=='' ){
    const updateobjone ={...entryobject,Emi_9:eminine}
setEntryObject(updateobjone) 
localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Nine:', updateobjone) 
}
if(entryobject && emiten!=='' ){
    const updateobjone ={...entryobject,Emi_10:emiten}
setEntryObject(updateobjone) 
localStorage.setItem('foundobject',JSON.stringify(updateobjone))
console.log('After entry Ten:', updateobjone) 
}
    }
    
    
    return(
        <div>
            <div id="backcolorthree">
        <div>
            <h1 id="headdivthree">MONTH ENTRY</h1>
        </div>
        <div id="flexthree">
        {entryobject? (
        <div id="resdatathree">
        <h4 className="leftheadthree">Loan ID <span className="semicolanthree">:</span> <span id="loanidlinkthree">{entryobject.Loan_ID}</span></h4>
        <h4 className="leftheadthree">Customer Name <span className="semicolanthree">:</span> <span id="namethree">{entryobject.Name}</span></h4>
        <h4 className="leftheadthree">Loan Amount <span className="semicolanthree">:</span> <span id="loanlinkthree">{entryobject.Loan_Amount}</span></h4>
        <h4 className="leftheadthree">Disposement Date <span className="semicolanthree">:</span> <span id="disposeidlinkthree">{entryobject.Disposement_Date}</span></h4>
        <h4 className="leftheadthree">Loan Months <span className="semicolanthree">:</span> <span id="monthidlinkthree">{entryobject.Loan_Months}</span></h4>
        <h4 className="leftheadthree">EMI <span className="semicolanthree">:</span> <span id="emiidlinkthree">{entryobject.EMI_Months}</span></h4>
        {showbal? (
                    <h4 className="leftheadthree">BALANCE <span className="semicolanthree">:</span> <span id="balanceidlinkthree">{showbal}</span></h4>
        ):(<p></p>)}
        </div>
        ):(<p></p>)}
        {entryobject? (
        <div id="emientrythree">

            <div className="padidrowthree">
            <label htmlFor="oneidthree">EMI 01</label>
            <input type="date" id="oneidthree" name="Emi_One" value={emione} onChange={handlechangeone}/>
            <h3 id="paidposition11three" style={{display:visibleone}} >PAID <span id="emiidlink01three" style={{display:visibleone}}>{entryobject.EMI_Months}</span></h3>
            </div>
        
        {emione && (
            <>
            <div className="padidrowthree">
            <label htmlFor="twoid">EMI 02</label>
            <input type="date" id="twoid" name="Emi_Two" value={emitwo} onChange={handlechangetwo}/>
            <h3 id="paidposition22" style={{display:visibletwo}}>PAID <span id="emiidlink02" style={{display:visibletwo}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}

        {emione && emitwo &&(
            <>
            <div className="padidrowthree">
            <label htmlFor="threeid">EMI 03</label>
            <input type="date" id="threeid" name="Emi_Three" value={emithree} onChange={handlechangethree}/>
            <h3 id="paidposition33" style={{display:visiblethree}}>PAID <span id="emiidlink03" style={{display:visiblethree}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}
            
        
        {emione && emitwo && emithree &&(
            <>
            <div className="padidrowthree">
            <label htmlFor="fourid">EMI 04 </label>
            <input type="date" id="fourid" name="Emi_Four" value={emifour} onChange={handlechangefour}/>
            <h3 id="paidposition44" style={{display:visiblefour}}>PAID <span id="emiidlink04" style={{display:visiblefour}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}
            
        
        {emione && emitwo && emithree && emifour &&(
            <>
            <div className="padidrowthree">
            <label htmlFor="fiveid">EMI 05</label>
            <input type="date" id="fiveid" name="Emi_Five" value={emifive} onChange={handlechangefive}/>
            <h3 id="paidposition55" style={{display:visiblefive}}>PAID <span id="emiidlink05" style={{display:visiblefive}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}     
            
            
       
        {emione && emitwo && emithree && emifour && emifive &&(
            <>
            <div className="padidrowthree">
            <label htmlFor="sixid">EMI 06</label>
            <input type="date" id="sixid" name="Emi_Six" value={emisix} onChange={handlechangesix}/>
            <h3 id="paidposition66" style={{display:visiblesix}}>PAID <span id="emiidlink06" style={{display:visiblesix}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}     

        {emione && emitwo && emithree && emifour && emifive && emisix &&(
            <>
            <div className="padidrowthree">
            <label htmlFor="sevenid">EMI 07</label>
            <input type="date" id="sevenid" name="Emi_Seven" value={emiseven} onChange={handlechangeseven}/>
            <h3 id="paidposition77" style={{display:visibleseven}}>PAID <span id="emiidlink07" style={{display:visibleseven}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}      
            

        {emione && emitwo && emithree && emifour && emifive && emisix && emiseven &&(
            <>
            <div className="padidrowthree">
            <label htmlFor="eightid">EMI 08</label>
            <input type="date" id="eightid" name="Emi_Eight" value={emieight} onChange={handlechangeeight}/>
            <h3 id="paidposition88" style={{display:visibleeight}}>PAID <span id="emiidlink08" style={{display:visibleeight}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}    
            

        {emione && emitwo && emithree && emifour && emifive && emisix && emiseven && emieight &&(
            <>
            <div className="padidrowthree">
            <label htmlFor="nineid">EMI 09</label>
            <input type="date" id="nineid" name="Emi_Nine" value={eminine} onChange={handlechangenine}/>
            <h3 id="paidposition99" style={{display:visiblenine}} >PAID <span id="emiidlink09" style={{display:visiblenine}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}    
            
            
        
            {emione && emitwo && emione && emitwo && emithree && emifour && emifive && emisix && emiseven && emieight && eminine && (
            <>
            <div className="padidrowthree">
            <label htmlFor="tenid">EMI 10</label>
            <input type="date" id="tenid" name="Emi_Ten" value={emiten} onChange={handlechangeten}/>
            <h3 id="paidposition10" style={{display:visibleten}} >PAID <span id="emiidlink10" style={{display:visibleten}}>{entryobject.EMI_Months}</span></h3>
            </div>
            </>
        )}  
            <button onClick={addnew}>ADD</button>
        </div>
        ):(<p></p>)
        
        }
       </div>
    </div>

        </div>
    )
}
export default Monthlyentry;