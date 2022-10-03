import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Sidebar = ({setMode,mode}) => {
  return (
    <Box
    flex={1} p={2}
    sx={{display:{xs:"none",sm:"block"}}}
    
    >

        <Box position="fixed" >
       <List>
          <ListItem  disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
               <HomeWorkIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          {/* Pages */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
               <AutoStoriesIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          {/* Groups */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
               <Diversity3Icon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          {/* Marketplace */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
               <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          {/* Friends */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
               <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          {/* Settings */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
               <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          {/* Profile */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
               <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          {/* dark and light mode */}

          <ListItem disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
               <DarkModeIcon/>
              </ListItemIcon>
              <Switch  onChange = {e=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
    </Box>
  )
}

export default Sidebar
