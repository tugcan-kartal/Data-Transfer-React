import React,{useState} from 'react'
import BottomPart from './components/BottomPart'
import TopPart from './components/TopPart'

const App = () => {
  
  const [allData,setAllData]=useState([]);

  const getList=(data)=>{
    setAllData(data);
  }

  return (
    <div>
      <TopPart getListFromTop={getList}/>
      <BottomPart sendListFromApp={allData}/>
    </div>
  )
}

export default App