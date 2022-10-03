import logo from './logo.svg';
import './App.css';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Sidebar from './componets/Sidebar';
import Rightbar from './componets/Rightbar';
import Feed1 from './componets/Feed1';
import Navbar from './componets/Navbar';
import Demo from './componets/Demo';

import Add1 from './componets/Add1';
import { useState } from 'react';


function App() {
  const [mode,setMode ] =  useState("dark")


  const darkTheme = createTheme({
    palette: {
      mode:mode
    },
  });
  return (
   
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color = {"text.primary"}>
  {/* <div position="fixed" > */}
       {/* navbar */}
      <Navbar/>

     <Stack  direction="row" justifyContent="space-evenly" spacing={2} >
     
     <Sidebar mode={mode} setMode = {setMode}/>
     <Feed1/>
      <Rightbar/>
     
     </Stack>

     <Add1/>
     {/* </div> */}
    </Box>
    </ThemeProvider>

    
  );
}

export default App;
