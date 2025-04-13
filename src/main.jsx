import React, {StrictMode, createContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import { homeApiData } from './utils/homeApiData.jsx';


const Context = createContext();
const AppWrapper = () => {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const category = ['general','entertainment','health','business', 'sports', 'technology'];
  const [searchQuery,setSearchQuery] = useState('Modi');
  // const [finalData, setData] = useState(homeApiData)   //for static data

  // dynamic data fetch code start
  const [finalData, setData] = useState({  
    'general': [], 'entertainment':[], 'health': [],
    'business':[], 'sports':[], 'technology':[]
  })   //for dynamic data

  const getData = async (category = 'science') => {
    try {
      let response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}&pageSize=100`)
      let data = response.data.articles.filter((item)=>item.urlToImage&&item.content).map((item) => Object.assign({ ...item, category }))
      // data = data.slice(0,5); 
      setData(prevData => ({
        ...prevData,
        [category]: data
      }));
      // console.log("FinalData >>>>>",finalData);

    } catch (err) {
      console.log('Main Page ERROR >>>',err);
    }


  };

  

  useEffect(() => {
    category.forEach(val=>{
      getData(val);
    })
  }, [])

  // dynamic data fetch code end


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