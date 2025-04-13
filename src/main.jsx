import React, {StrictMode, createContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';


const Context = createContext();
const AppWrapper = () => {

  const category = ['general','entertainment','health','business', 'sports', 'technology'];

  const [finalData, setData] = useState({  
    'general': [], 'entertainment':[], 'health': [],
    'business':[], 'sports':[], 'technology':[]
  })

  const getData = async (category = 'science', country = 'us') => {
    try {
      // let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&46717fb6678441e5927ed81db812ee76apiKey=f463419c4e4c4ebd96549c95688e979b&pageSize=10`)
      let response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=2d55f494fe674381af5e990d5d995b6e&pageSize=100`)
      let data = response.data.articles.filter((item)=>item.urlToImage).map((item) => Object.assign({ ...item, category }))
      // data = data.slice(0,5); 
      setData(prevData => ({
        ...prevData,
        [category]: data
      }));
      console.log(finalData)

    } catch (err) {
      return err;
    }


  };

  

  useEffect(() => {

    category.forEach(val=>{
      getData(val);
    })

  }, [])


  // const user = { fname: "Anjani", lname: "Singh" };
  // const [loading, setLoading] = useState(false);
  return (
    < Context.Provider value={{ finalData, getData }}>
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