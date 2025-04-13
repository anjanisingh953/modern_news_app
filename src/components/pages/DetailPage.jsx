import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SingleCategoryCard from '../atomic/SingleCategoryCard';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Context } from '../../main';
import Pagination from '../atomic/Pagination';


const DetailPage = () => {

      let {finalData,category} =  useContext(Context);
      const {pageCategoryName  } = useParams();
      const navigate = useNavigate();
      
          const [currentPage, setCurrentPage] = useState(1);
          const [rowPerPage, setRowPerPage] = useState(5);
          const indexOfLastItem = currentPage * rowPerPage;
          const indexOfFirstItem = indexOfLastItem - rowPerPage;
      


    useEffect(() => {
        if (!category.includes(pageCategoryName)) {
            console.log('first not found')
            navigate('/404')
            return;
        }
      }, [pageCategoryName]);




    console.log("category" ,category)

    let currentPageData = finalData[pageCategoryName];    
    const currentItems = currentPageData && currentPageData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = currentPageData && Math.ceil(currentPageData.length/rowPerPage)



    return (
      <>
        <div className="detailpage_main_div" >
    
         <h2 className="detailpage_category_name">{pageCategoryName.toUpperCase()} <ArrowRightIcon /> </h2>
    
    {
      currentItems && currentItems.map((item) => (
        
        <SingleCategoryCard publishedat={item.publishedAt} title={item.title} newsurl={item.url} content={item.content.split('[')[0]} imgurl={item.urlToImage} />
    
      ))
      
      }
       </div>
       {

        currentPageData &&<Pagination  setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}  /> 
       }

       </>
      )


}

export default DetailPage