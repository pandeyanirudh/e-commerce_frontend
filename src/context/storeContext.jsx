// for displaying the food items we are creating this storeContext file
import { createContext, useState, useEffect } from "react"
import { food_list } from "../assets/assets"

export const storeContext = createContext(null)

const storeContextProvider = (props) => {

   const [cartItems, setCartItems] = useState({}); // here we have created one cart item state

    // now well creating the functionality for add to cart
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            // if the user will add the item first time in the cart then this statement will be executed
            // using that in this one entery will be created, the key id will be itemId and the value will be number of quantity
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        // if the item is already present in cart increase the value by 1
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    // now well creating the functionality for remove to cart
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

//  if user add any element in this in this object we can access that element in any component using the context
    const contextValue = {
        //  in this context value we can provide any value or function and we can access that in any function using the context to add the support of this context move to main.jsx file and in browser router <storeContextProvider>
        // noe from using this context we can access the food_list anywhere
        food_list,
        // now we will using this in foodItemCard component
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    }
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}

export default storeContextProvider