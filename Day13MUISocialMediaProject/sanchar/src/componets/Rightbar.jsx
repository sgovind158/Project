
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'


const itemData = [ {
      img:"https://images.unsplash.com/photo-1549388604-817d15aa0110?w=161&fit=crop&auto=format",
      title:"",
       },

       {
        img:"https://images.unsplash.com/photo-1549388604-817d15aa0110?w=161&fit=crop&auto=format",
        title:"",
         },

         {
            img:"https://images.unsplash.com/photo-1549388604-817d15aa0110?w=161&fit=crop&auto=format",
            title:"",
             },

            

               ]
const Rightbar = () => {
   
  return (
    <Box 
     flex={2} p={2}
     sx={{display:{xs:"none",sm:"block"}}}
     >
     
     {/* fixed right bar */}
     <Box position="fixed">
        <Typography varient="h3">Online Friends </Typography>
          {/* group images  */}
     <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>

<Typography varient="h3" mt={2} mb={2}>Latest Photes </Typography>

<ImageList gap={10} cols={3} rowHeight={104}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={"home img"}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
   
   {/* letest conversation */}
   <Typography varient="h3" mt={2} mb={2}>Latest Conversetion </Typography>
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
   
   
   
   
     </Box>
 </Box>
  )
}

export default Rightbar
