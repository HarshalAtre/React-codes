import React from 'react'

export default function Navbar({filterItem,all,menuList}) {
  return (
    <>
       <nav className='navbar'>
        <div className='btn-group'>
            {
                menuList.map((currEle)=>{
                    return <button className='btn-group__item' onClick={()=>filterItem(currEle)}>{currEle}</button>

                })
            }
       
        </div>
      </nav>
    </>
  )
}
