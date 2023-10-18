import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App=()=> {
  const [input,setinput]=useState("");
  const[result,setresult]=useState(0);
  const handler=e=>{
    setinput(e.target.value);
  }
  return (
    <div >

    <h1>SAMPLE CALCULATOR</h1>

    <div className='cal-con'>
      <center>
      <input type="text" value={input} name="input" onChange={handler}/>
      <br/>
      <button onClick={()=>setresult(eval(input))}>Result</button>
      <h4>result is :{result}</h4>
      <button onClick={()=>setinput(input+'1')}>1</button>
      <button onClick={()=>setinput(input+'2')}>2</button>
      <button onClick={()=>setinput(input+'3')}>3</button>
      <button onClick={()=>setinput(input+'4')}>4</button>
      <button onClick={()=>setinput(input+'5')}>5</button>
      <br/>
      
      <button onClick={()=>setinput(input+'6')}>6</button>
      <button onClick={()=>setinput(input+'7')}>7</button>
      <button onClick={()=>setinput(input+'8')}>8</button>
      <button onClick={()=>setinput(input+'9')}>9</button>
      <button onClick={()=>setinput(input+'0')}>0</button>
      <br/>
      <button onClick={()=>setinput(input+'+')}>+</button>
      <button onClick={()=>setinput(input+'-')}>-</button>
      <button onClick={()=>setinput(input+'/')}>/</button>
      <button onClick={()=>setinput(input+'*')}>*</button>
      <button onClick={()=>setinput("")}>clr</button>
      </center>
    </div>

    </div>
  );
}

export default App;
