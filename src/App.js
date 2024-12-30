
import { useState,useCallback, useEffect } from "react";

import { useRef } from "react";
import "./App.css" ;

 export default function App(){
  
  const [length,setlength]= useState(8);
  const[numberallowed,setnumberallowed]=useState(true);
  const[charallowed,setcharallowed]=useState(false);
  const[password,setpassword]=useState("");
  const passworddRef=useRef(null)
  const copyPasswordToClip=useCallback(()=>{ passworddRef.current?.select();
   
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,numberallowed,charallowed,setpassword])
  useEffect(()=>{passwordGenerator()},[length,numberallowed,charallowed,passwordGenerator])
  return (<><h1 className="next" style={{color:"white"}
   
   
  }>password generator</h1>
  <div className="next"><div>
    <input type="text"
    value={password}/>
    <button 
    onClick={copyPasswordToClip}>copy</button></div>
    <div>
      <div>
        <input type="range"
        min={3}
        max={100}
        value={length}
        onChange={(e)=>{setlength(e.target.value)}}></input>
        <label> length:{length}</label></div><div>
          <input type="checkbox"
          defaultChecked={numberallowed}
          onChange={()=>{
            setnumberallowed((prev)=>!prev);
          }}></input>number1</div>
          <div><input type="checkbox"
          defaultChecked={charallowed}
          onChange={()=>{
            setcharallowed((prev)=>!prev)}}/>
            <label>characters</label></div></div></div>
  
    </>

  )

    
  
  

}
    
