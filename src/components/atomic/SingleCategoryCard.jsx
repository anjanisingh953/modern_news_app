import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { TimeConversion } from '../../utils/TimeConversion';

const SingleCategoryCard = ({title,imgurl,content,newsurl,publishedat}) => {

    

    return (
<>
            <hr style={{marginTop:'20px'}}></hr>
        <div style={{display:'flex',padding:'5px 0'}}>
            <div style={{paddingRight:'40px',width:'70%'}}>
            <h3>{title}</h3>
        <p>{content}</p>

        <a href={newsurl} target='_blank'>Read more</a>
        <br />
        <br />
        <p style={{color:'#ce0c0c'}}>{TimeConversion(publishedat)}</p>
            </div>

        <div style={{marginLeft:'auto'}}>
            <img  src={imgurl} alt="news" width="100px" height="100px" />
            </div>          
        </div>   
</>

      )
}

export default SingleCategoryCard