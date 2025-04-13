import React, { useContext } from 'react'
import { Context } from '../../main'

const Business = () => {

  const {finalData} =  useContext(Context)

  console.log("BUSINESS >>>",finalData.business)

  return (
    <div>This is Business Page</div>
  )

}

export default Business