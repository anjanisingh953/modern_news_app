import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SingleCategoryCard from '../atomic/SingleCategoryCard';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Context } from '../../main';


const DetailPage = () => {

      let {finalData,category} =  useContext(Context);
      const navigate = useNavigate();
      
    const {pageCategoryName  } = useParams();


    useEffect(() => {
        if (!category.includes(pageCategoryName)) {
            console.log('first not found')
            navigate('/404')
            return;
        }
      }, [pageCategoryName]);




    console.log("category" ,category)

    let currentPageData = finalData[pageCategoryName];
  


    return (
  
        <div style={{width:'70%',backgroundColor:'#fff',marginTop:'30px', borderRadius:'5px',boxShadow:'4px 6px 5px black', padding:'15px',margin:'80px auto'}}>
    
         <h2 style={{color:'#ce0c0c'}}>{pageCategoryName.toUpperCase()} <ArrowRightIcon /> </h2>
    
    {
      currentPageData.map((item) => (
        
        <SingleCategoryCard publishedat={item.publishedAt} title={item.title} newsurl={item.url} content={item.content.split('[')[0]} imgurl={item.urlToImage} />
    
      ))
      
      }
       </div>
      )


}

export default DetailPage