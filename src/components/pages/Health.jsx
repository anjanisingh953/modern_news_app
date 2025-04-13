import React, { useContext } from 'react'
import { Context } from '../../main'

const Health = () => {

const {finalData} =  useContext(Context)

  console.log("HEALTH >>>",finalData.health)

  return (
    <div>This is Health Page</div>
  )
}

export default Health