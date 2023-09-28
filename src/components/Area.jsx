import React,{ useState,useEffect,useRef} from 'react'

export default function Area() {
const [main,setmain]=useState(false)
const[text,settext]=useState("Enter")
const[trials,settrials]=useState(0)
const[com_input,setcom_input]=useState(" ")
const inputRef = useRef(null);
const [input, setinput] = useState("Your Guess")
const[result,setresult]=useState()


//....................computer input................
useEffect(() => {
  setcom_input(parseInt(Math.random() * 100))
  
 },[])

  // .............user input update................
  const input_preview=(e)=>{
    setmain(false)
  let a=e.target.value
  setinput(a)
  }

//............button submission................
const submit_input=()=>{
 setmain(true)
  if(com_input==input){
    console.log("match")
    settext("Enter")
    setresult(" you won")
  }
  else if(input>com_input){
    settext("Re-Enter")
    console.log("not matched")
    setresult("try something smaller")
  }
  else{
    settext("Re-Enter")
    console.log("not matched")
    setresult("try something larger")
  }

   settrials(trials+1)
   inputRef.current.focus();
console.log("its the user input number:",input)
  }
 
  console.log("computer choice :",com_input)

//.....................play again..................
const reset_game=()=>{
  window.location.reload(true)
  console.log("reset clicked")
}
 return ( 
    <>    

    <div className='container my-5' >

       <h3 className='my-4'>{text} your Number</h3>                 
{/* .....................user input box.................. */}
<div className="input-group mx-auto ">
<input  type="number" className="form-control " placeholder={input} value={main?" ":input} onChange={input_preview} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" ref={inputRef} />
</div>

{/*........................ button................... */}
<div className="d-grid my-3 gap-2 col-4 mx-auto">
  <button className="btn btn-primary "  onClick={submit_input} type="submit">Submit</button>
  <input className="btn btn-primary" type="reset" onClick={reset_game} value="Reset"></input>
</div>

<hr />
<h5>User input :{input}</h5>
<h5>Trials :{trials} </h5>
<h5>Minus points :{trials*3} </h5>
<hr />
<h5>output :{result}</h5>
<hr />
<h5>Your score :{100-(trials*3)}</h5>

                                    









                                    


    </div>
    </>

  )
}
