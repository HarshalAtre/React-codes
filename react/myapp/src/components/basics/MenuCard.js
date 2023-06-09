import React from 'react'
import "./style.css"
const Mystyle={color:"red"};

export default function MenuCard({menuData}) {
//  console.log(menuData)
  return (
    <>
    <section className='main-card--cointainer'>
    { menuData.map((currEle)=>{
        const {id,name,category,image,description}=currEle;
    return( <>
    <div className='card-container' key={id}>
    <div className='card'>
        <div className='card-body'>
            <span className='card-number card-circle subtle'>{id}</span>
            <span className='card-author subtle' style={Mystyle}>{category}</span>
            <span className='card-title'>{name}</span>
            <span className='card-description subtle'>
             {description}
            </span>
            <div className='card-read'>Read</div>
            <img src={image} alt="images" className='card-media'/>
            <span className='card-tag subtle'>Order Now</span>
            </div>
            </div>
            </div>
             </>
)
})}
</section>
 </>
 )
}
