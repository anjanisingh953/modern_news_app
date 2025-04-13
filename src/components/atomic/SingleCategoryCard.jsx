import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { TimeConversion } from '../../utils/TimeConversion';

const SingleCategoryCard = ({title,imgurl,content,newsurl,publishedat}) => {

    

    return (
<>
            <hr className="hr_line2"></hr>
        <div  className="singleCategoryCard_list_outer_div">
            <div className="singleCategoryCard_list_content_div">
               <h3 className='detail_news_title'><a href={newsurl} target='_blank'>{title}</a></h3>
               <p>{content}</p>
              <a href={newsurl} target='_blank'>Read more</a>
              <br />
              <br />
              <p className="time_info">{TimeConversion(publishedat)}</p>
            </div>

            <div className='singleCategoryCard_list_img_div'>
              <a href={newsurl} target='_blank'>
                <img  src={imgurl} alt="news" width="100px" height="100px" />
              </a>
            </div>          
        </div>   
</>

      )
}

export default SingleCategoryCard