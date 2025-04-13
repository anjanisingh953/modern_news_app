import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CategoryCard from '../atomic/CategoryCard';
import { Context } from '../../main';
// import { getHeadlineByCategoryAndCountry } from '../../services/api'

const Home = () => {
    const {finalData} =  useContext(Context);
  return (
    
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly', marginTop:'35px',marginBottom:'110px'}}>

{
  Object.entries(finalData).map(([category, articles]) => (
    <CategoryCard category={category} articles={articles.slice(0,3)} />

  ))
  
  }
   </div>
  )
}

export default Home