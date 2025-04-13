import React, {StrictMode, createContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import { homeApiData } from './utils/homeApiData.jsx';


const Context = createContext();
const AppWrapper = () => {

  const category = ['general','entertainment','health','business', 'sports', 'technology'];
  const [searchQuery,setSearchQuery] = useState('Modi');
  const [finalData, setData] = useState(homeApiData) 
  // const [finalData, setData] = useState({  
  //   'general': [], 'entertainment':[], 'health': [],
  //   'business':[], 'sports':[], 'technology':[]
  // })

  // const getData = async (category = 'science', country = 'us') => {
  //   try {
  //     // let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}0f3c9a3821974443b4bfd052b940a1c9&46717fb6678441e5927ed81db812ee76apiKey=f463419c4e4c4ebd96549c95688e979b&pageSize=10`)
  //     let response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=0f3c9a3821974443b4bfd052b940a1c9&pageSize=100`)
  //     let data = response.data.articles.filter((item)=>item.urlToImage&&item.content).map((item) => Object.assign({ ...item, category }))
  //     // data = data.slice(0,5); 
  //     setData(prevData => ({
  //       ...prevData,
  //       [category]: data
  //     }));
  //     console.log("finalDataDGAGGDGDGGDG >>>>>",finalData)

  //   } catch (err) {
  //     return err;
  //   }


  // };

  

  // useEffect(() => {

  //   category.forEach(val=>{
  //     getData(val);
  //   })

  // }, [])


  return (
    // < Context.Provider value={{ finalData, getData,category,searchQuery,setSearchQuery }}>
    < Context.Provider value={{ finalData,category,searchQuery,setSearchQuery }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider >
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)

export { Context };