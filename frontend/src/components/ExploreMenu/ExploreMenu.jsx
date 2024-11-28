import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu=({category,setCategory})=> {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-meu-text'>Discover our diverse menu, offering a blend of local and international flavors. Each dish is crafted with fresh ingredients to delight your taste buds. From appetizers to desserts, enjoy a culinary journey that promises satisfaction in every bite. Join us for an unforgettable dining experience.</p>

        <div className='explore-menu-list'>
          {menu_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>  
            )
          })}  
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu