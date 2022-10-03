import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box bgcolor={"green"} 
    flex={1} p={2}
    sx={{display:{xs:"none",sm:"block"}}}
    
    >
      sidgebar
    </Box>
  )
}

export default Sidebar
