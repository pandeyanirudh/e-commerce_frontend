import React, {useState} from 'react'
import './home.css'
import Header from '../../components/Header/header'
import ExploreMenu from '../../components/exploreMenu/exploreMenu'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'

const home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      
    </div>
  )
}

export default home