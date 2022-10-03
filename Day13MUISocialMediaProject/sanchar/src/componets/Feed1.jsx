// import { ExpandMore } from '@mui/icons-material'

import { Box } from '@mui/material';
import React, { useState } from 'react'
import data from './data';
import Post from './Post';





const Feed1 = () => {
 const [feedData ,setFeedData] = useState(data)

  return (
    <Box flex={4} p={2}>

{feedData.map((el ,index)=>{
  return(
    <Post key={index} item={el}/>
  )
})}
   
    
    </Box>
  )
}

export default Feed1
