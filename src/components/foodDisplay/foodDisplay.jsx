import React, {useContext} from 'react'
import './foodDisplay.css'
import { storeContext } from '../../context/storeContext'
import FoodItemCard from '../foodItemcard/foodItemCard'

// we will mount this component 
const foodDisplay = ({category}) => {

    //  well get the food list array using the context file
    const {food_list} = useContext(storeContext)
  return (
    <div className='food_display' id='food_display'>
        <h2>Top dishes near you</h2>
        {/* now well display the multiple food items */}
        <div className="food_display_list">
            {food_list.map((item, index) => {

                // category is set in assets.js file by this they can filter the foods
                if(category==="All" || category===item.category){

                // well return the food data in a card for that we create a folder foodItemCard
                // inside the FoodItemCard well pass the props like key
                return <FoodItemCard key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/> 

                }
            })}
        </div>
    </div>
  )
}

export default foodDisplay