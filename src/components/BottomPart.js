import React from 'react'

const BottomPart = (props) => {

  const allList=props.sendListFromApp;

  return (
    <div>
      {allList && allList.map((item,key)=>(
        <div key={key}>
          <div>{item}</div>
        </div>
      ))}
    </div>
  )
}

export default BottomPart