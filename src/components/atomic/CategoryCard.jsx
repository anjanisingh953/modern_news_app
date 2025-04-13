import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { TimeConversion } from '../../utils/TimeConversion';
import { NavLink } from 'react-router-dom';
const CategoryCard = ({category,articles}) => {
  
  return (
    <div className="home_individual_div">

     <h2 className="home_category_name"><NavLink to={`/details/${category}`}>{category.toUpperCase()} <ArrowRightIcon /> </NavLink></h2>
       {Array.isArray(articles) && articles.length > 0 ? (
        articles.map((article, idx) => (
          <div key={idx}>
            <hr className="hr_line" />  
            <div className="home_list_outer_div" >
              <div className="home_list_content_div" >
                <h3 className='home_news_title'><a href={article.url} target='_blank'>{article.title}</a></h3>
                <br />
                <p className="time_info">{TimeConversion(article.publishedAt)}</p>
              </div>
              <div className='home_list_img_div'> 
                <a href={article.url} target='_blank'>
                  <img  src={article.urlToImage} alt="news" width="80px" height="80px" />
                </a>
             </div> 
            </div>  
          
          </div>
        ))
      ) : (
        <h2 className="not_found_text">No articles found in this category.</h2>
      )}



    </div>
  )
}

export default CategoryCard