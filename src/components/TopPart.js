import React, { useState,useRef, useEffect } from 'react'

const TopPart = (props) => {
  
  const inputRef=useRef(null);

  const [taskName,setTaskName]=useState("");
  const [allList,setAllList]=useState([]);

  const handleChange=(event)=>{
    setTaskName(event.target.value);
  }

  const handleSubmit=()=>{
    taskName && setAllList([...allList,taskName]);
    inputRef.current.value="";
    inputRef.current.focus();
    setTaskName("");
  }

  useEffect(()=>{
    props.getListFromTop(allList);  //every change time allList send updated version of all list
  },[allList]);

  return (
    <div>
      <input placeholder='change it' ref={inputRef} onChange={handleChange}/>
      <button onClick={handleSubmit}>add</button>
    </div>
  )
}

export default TopPart