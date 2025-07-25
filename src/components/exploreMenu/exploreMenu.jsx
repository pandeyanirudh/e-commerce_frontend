import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'


const exploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore_menu' id='explore_menu'>
        <h1>Explore our menu</h1>
        <p className="explore_menu_text">Choose from a diverse manu</p>
        <div className="explore_menu_list">
            {menu_list.map((item,index) => {
                return (
                <div onClick={() => setCategory(prev => prev===item.menu_name?"All":item.menu_name)} key={index} className="explore_menu_list_items">
                        <img className={category===item.menu_name?"active":""} src={item.menu_img} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
                
            })}
        </div>
        <hr/>
    </div>
  )
}

export default exploreMenu