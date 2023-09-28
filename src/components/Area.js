import React,{ useState,useEffect} from 'react'
// import Spinner from './Spinner.gif'

export default function Area() {
  // .............user input update................
  const [user_input, setinput] = useState(" ")
  const input_preview=(e)=>{
  let a=e.target.value
  setinput(a)
  }
  
  //................creating  state..............
const[text,settext]=useState("Enter")
const[trials,settrials]=useState(0)
//....................computer input................
const[com_input,setcom_input]=useState(" ")
 
useEffect(() => {
   setcom_input(parseInt(Math.random() * 100))
  },[])

//................no correct or not state......................
const[result,setresult]=useState(" ")


//............button submission................
const submit_input=()=>{
  setinput(" ")
  if(com_input==user_input){
    console.log("match")
    settext("Enter")
    setresult(" you won")
  }
  else if(user_input>com_input){
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
console.log("its the user input number:",user_input)

  }
  console.log("computer choice :",com_input)
//.....................play again..................
const reset_game=()=>{
  window.location.reload(true)
  console.log("reset clicked")
}
//...............setting image.................
// const b_image=()=>{
//   backgroundImage:`url(${Spinner})`,
//   height:'100vh',
//   backgroundSize:'cover'

// }
// document.body.style.backgroundImage=`url(${Spinner}) `

  return ( 
    <>    

    <div className='container my-5' >
       <h3 className='my-4'>{text} your Number</h3>
       {/* {setinput(" ")}{settrials(0)} */}
                    
{/* .....................user input box.................. */}
<div className="input-group mx-auto ">
<input type="number" className="form-control " placeholder="your number" value={user_input} onChange={input_preview} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

{/*........................ button................... */}
<div className="d-grid my-3 gap-2 col-4 mx-auto">
  <button className="btn btn-primary "  onClick={submit_input} type="submit">Submit</button>
  <input className="btn btn-primary" type="reset" onClick={reset_game} value="Reset"></input>
</div>
  

<hr />
<h5>User input :{user_input}</h5>
<h5>Trials :{trials} </h5>
<h5>Minus points :{trials*3} </h5>
<hr />
<h5>output :{result}</h5>
<hr />
<h5>Total score :{100-(trials*3)}</h5>

                                    









                                    


    </div>
    </>

  )
}
