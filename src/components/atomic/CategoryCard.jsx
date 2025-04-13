import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const CategoryCard = ({category,articles}) => {
  
  return (
    <div style={{width:'30%',backgroundColor:'#fff',marginTop:'20px', borderRadius:'5px',boxShadow:'4px 6px 5px black', padding:'15px'}}>

     <h2 style={{color:'#ce0c0c'}}>{category.toUpperCase()} <ArrowRightIcon /> </h2>
       {Array.isArray(articles) && articles.length > 0 ? (
        articles.map((article, idx) => (
          <div key={idx}>
            <hr />  
            <div style={{display:'flex',padding:'5px 0'}}>
            <h3>{article.title}</h3>
            <img src={article.urlToImage} alt="news" width="80px" height="80px" />
             </div>   
          
          </div>
        ))
      ) : (
        <p>No articles found in this category.</p>
      )}



    </div>
  )
}

export default CategoryCard