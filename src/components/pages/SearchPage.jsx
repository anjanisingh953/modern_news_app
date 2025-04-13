import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../main';
import axios from 'axios';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useParams } from 'react-router-dom';
import SingleCategoryCard from '../atomic/SingleCategoryCard';
import { searchApiData } from '../../utils/searchApiData';
import Pagination from '../atomic/Pagination';

const SearchPage = () => {
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    let {searchQuery} =  useContext(Context);
    let pageCategoryName = `Search result found for`;
    // const [searchArr, setSearchArr] = useState(searchApiData);  //for static data
   const [searchArr, setSearchArr] = useState([]);  //for dynamic data

    const [currentPage, setCurrentPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(10);
    const indexOfLastItem = currentPage * rowPerPage;
    const indexOfFirstItem = indexOfLastItem - rowPerPage;
    const currentItems = searchArr.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(searchArr.length/rowPerPage)
       




//fetch from the api code start
    const fetchData=  async(searchparameter) => {
        try {
            let response = await axios.get(`https://newsapi.org/v2/everything?q=${searchparameter}&language=en&apiKey=${API_KEY}`)
            let data = response.data.articles
            setSearchArr(data)
            console.log("SEARCH DATA RESULT >>>",data)

          } catch (err) {
            console.log("errrrrr",err)
          }
    
      };

          useEffect(() => {
            fetchData(searchQuery);            
         }, [searchQuery]);

//fetch from the api code end



         return (
            <>  
            <div className="searchpage_main_div">
        
             <h2 className="searchpage_category_name">{pageCategoryName} - {searchQuery} <ArrowRightIcon /> </h2>
        
        {
          currentItems && currentItems.map((item) => (
            
            <SingleCategoryCard publishedat={item.publishedAt} title={item.title} newsurl={item.url} content={item.content.split('[')[0]} imgurl={item.urlToImage} />
        
          ))
          
          }
           </div>
          {
            currentItems.length>0?<Pagination  setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}  />: (<h2 className="not_found_text">No results found</h2>)    
          } 
</>
          )
          



}

export default SearchPage