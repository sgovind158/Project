
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'


const itemData = [ {
      img:"https://media-exp1.licdn.com/dms/image/C4D22AQGfAfHYdQKxsg/feedshare-shrink_800/0/1664712485346?e=1667433600&v=beta&t=94QXEVmoMLHM7ax5qdBRH6RdXjILG-i6fPzDPDNb0WA",
      title:"",
       },

       {
        img:"https://media-exp1.licdn.com/dms/image/C4D22AQGoH26Ra88unQ/feedshare-shrink_800/0/1664775243004?e=1667433600&v=beta&t=Q1IrUb3D7FOQeFDNnjeQklIEcYqMn6bTU7720UHBgRQ",
        title:"",
         },

         {
            img:"https://media-exp1.licdn.com/dms/image/C4D22AQFj1o5nNwRvFg/feedshare-shrink_800/0/1664005250306?e=1667433600&v=beta&t=mLFklW3svMZHOL2UKS7DIWgHGoYW3htPOBmSR3FnNFg",
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
  <Avatar alt="Siddharth Bisht
" src="https://media-exp1.licdn.com/dms/image/C4D03AQHaC9Y0gaRg_w/profile-displayphoto-shrink_100_100/0/1656778691902?e=1670457600&v=beta&t=bcuIrbvswK8nqiMQ4wYkUB7RnA_8DHp8VyfM1rEGJRs" />
  <Avatar alt="Mayank Tamrkar
" src="https://media-exp1.licdn.com/dms/image/C4D03AQFsYtigqDnfYA/profile-displayphoto-shrink_100_100/0/1663486943708?e=1670457600&v=beta&t=iLmIkO6Tjudi7kLGpQ138DbDzrrlGG4-hrGx4w5aR0U" />
  <Avatar alt="Sayak Mohanta
" src="https://media-exp1.licdn.com/dms/image/C5603AQFhhcPush7s0w/profile-displayphoto-shrink_100_100/0/1653597824626?e=1670457600&v=beta&t=tnru27MmeeUCEE5VPXPl2euGYK-4a53iVuol3VANlso" />
  <Avatar alt="Ankit Mishra" src="https://media-exp1.licdn.com/dms/image/C5603AQE7EHSVgFSi3g/profile-displayphoto-shrink_100_100/0/1637986336884?e=1670457600&v=beta&t=pRWFXtqbvUifpxmG8_dyujLSqdcbB5Jb42uDU9a8aAQ" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>

<Typography varient="h3" mt={2} mb={2}>Latest Photes </Typography>

<ImageList gap={10} cols={3} rowHeight={104}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}`}
        srcSet={`${item.img}`}
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
