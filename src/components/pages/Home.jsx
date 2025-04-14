import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CategoryCard from '../atomic/CategoryCard';
import { Context } from '../../main';
// import { getHeadlineByCategoryAndCountry } from '../../services/api'

const Home = () => {
    const {finalData} =  useContext(Context);
    // console.log('HOme Page is render')
  return (
    
    <div className="home_main_div" >

{
  Object.entries(finalData).map(([category, articles],ind) => (
    <CategoryCard key={ind} category={category} articles={articles.slice(0,3)} />

  ))
  
  }
   </div>
  )
}

export default Home