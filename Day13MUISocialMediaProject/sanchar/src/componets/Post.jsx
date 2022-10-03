import { Card } from '@mui/material'

import React from 'react'
import styled from '@emotion/styled';
import { ExpandMore, Favorite, FavoriteBorder } from '@mui/icons-material';
import { Avatar, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
const Post = ({item}) => {
    let {img,icon,name} = item;
  return (
    <>
     {/* card  */}
    
     <Card    sx={{margin:5}}>
     <CardHeader
       avatar={
         <Avatar src={icon} sx={{ bgcolor: red[500] }} aria-label="recipe">
         
         </Avatar>
       }
       action={
         <IconButton aria-label="settings">
           {/* <MoreVertIcon /> */}
         </IconButton>
       }
       title={name}
       subheader="September 14, 2016"
     />
     <CardMedia
       component="img"
    //    height="300"
       image={img}
       alt={name}
     />
     
     <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
       <Checkbox color="secondary" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
       </IconButton>
       <IconButton aria-label="share">
       <Checkbox icon={<ScreenShareIcon />} checkedIcon={  <ScreenShareIcon  />} />
       
       </IconButton>
       <ExpandMore
        //  expand={expanded}
        //  onClick={handleExpandClick}
        //  aria-expanded={expanded}
         aria-label="show more"
       >
         {/* <ExpandMoreIcon /> */}
       </ExpandMore>
     </CardActions>
    
   </Card>
  
   </>
  )
}

export default Post
