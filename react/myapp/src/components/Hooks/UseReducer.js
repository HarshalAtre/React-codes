import React from 'react'
import "./style.css"
const UseReducer = () => {
  const [myNum,setmyNum]=React.useReducer(15);
  return (
    <>
      <div classNameNameName='center_div'>
        <p>{myNum}</p>
        <div className='button2' onClick={()=>setmyNum(myNum+1)}>
            
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='button2'onClick={()=>myNum>0?setmyNum(myNum-1):setmyNum(0)}>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
            DECR
        </div>
      </div>
    </>
  )
}

export default UseReducer