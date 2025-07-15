import React, {useContext} from 'react'
import './foodItemCard.css'
import { assets } from '../../assets/assets'
import { storeContext } from '../../context/storeContext'


const foodItemCard = ({id, name, price, description, image}) => {

    // for adding food item in our cart we will use useContext
    const {cartItems,addToCart,removeFromCart} = useContext(storeContext);

  return (
    <div className='food_item'>
        <div className="food_item_image_container">
            <img src={image} alt="" className="food_item_image" />
            {/* here well check if our food item is not added then here well show add button if food item is added well provide the add to cart and remove from cart from storecontext */}
            {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
            :<div className='food_item_container'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>}
        </div>
        <div className="food_item_info">
            <div className="food_item_name_rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food_item_description">{description}</p>
            <p className="food_item_price">${price}</p>
        </div>
    </div>
  )
}

export default foodItemCard