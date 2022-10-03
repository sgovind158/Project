// import styled from '@emotion/styled'
import {styled} from "@mui/material/styles"
import { AppBar,Avatar,Badge,Box , InputBase, Menu, MenuItem, Toolbar,  Typography } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';

import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
});

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: "20px",
    width:"40%"
}))

// const Root = styled('div')(({ theme }) => ({
  
   
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: blue[500],
//     },
   
//   }));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
     
    },
  }));

const UserBox = styled(Box)(({theme})=>({
   
    display:"flex",
    gap:"20px",
    alignItems:"center",

    [theme.breakpoints.up("sm")]: {
        display: "none",
       
      },
}))



const Navbar = () => {

     const [open,setOpen] = useState(true)

     const handleClick = (event) => {
       setOpen(true)
      };
      const handleClose = () => {
        setOpen(false)
      };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography  variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
          Sanchar App
        </Typography>
        <PetsIcon variant='h6' sx={{display:{xs:"block",sm:"none"}}}>
            </PetsIcon>

{/* Search */}
<Search> 
    <InputBase placeholder = "search here"/>
</Search>

{/* Icons */}
<Icons  onClick={handleClick}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://media-exp1.licdn.com/dms/image/C5603AQELgoVZqcbHfQ/profile-displayphoto-shrink_100_100/0/1647699042920?e=1670457600&v=beta&t=sk4FurvheboQBehrGEezrXfLlu4xKG23UMgr7x7k4og"
            // onClick={(e) => setOpen(true)}
          />
        </Icons>

    {/* User box for small size  */}
    <UserBox onClick={handleClick}>
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
    <Typography>Lama</Typography>  
    </UserBox>
       
      </StyledToolbar>
{/* menu */}
<Menu
        // id="demo-positioned-menu"
        // aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar
