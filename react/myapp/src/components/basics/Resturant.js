import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from './Navbar';


 const uniqueList=[...new Set(Menu.map((curElem)=>{
return curElem.category;
 })),
"All",]; 
 console.log(uniqueList)
const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [menuList,setmenuList]=useState(uniqueList)
  console.log(menuData);
  
  const filterItem=(category)=>{
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList=Menu.filter((curElem) => {
    if(curElem.category===category){
      return curElem.category
    }
    });
    setMenuData(updatedList);
  }
  const all=()=>{
    const upl=Menu;
    setMenuData(upl);
  }
  return (
    <div>
     <Navbar filterItem={filterItem} all={all} menuList={menuList} />
     <MenuCard menuData={menuData}/>
    </div>
  )
}
  
export default Resturant
