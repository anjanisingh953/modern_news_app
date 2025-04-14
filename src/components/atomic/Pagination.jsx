import React from 'react'

const Pagination = ({setCurrentPage,currentPage,totalPages}) => {

    const handlePrev = ()=>{
        setCurrentPage((prev)=>Math.max(prev-1, 1));
    }


    const handleNext = ()=>{
        setCurrentPage((prev)=>Math.min(prev+1, totalPages));
    }

    const handlePageClick = (pagenumber)=>{
        setCurrentPage(pagenumber);
    }

  return (
            <div className='pagination_main_div'>
            <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
            {
                Array.from({length:totalPages},(_,index)=>(
                    <button key={index} className={(currentPage == index+1)?'activePage':''} onClick={()=>handlePageClick(index+1)}>{index+1}</button>
                ))
            }
            <button onClick={handleNext} disabled={currentPage == totalPages}>Next</button>

        </div>
  )
}

export default Pagination