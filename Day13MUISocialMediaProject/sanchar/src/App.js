import logo from './logo.svg';
import './App.css';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Sidebar from './componets/Sidebar';
import Rightbar from './componets/Rightbar';
import Feed1 from './componets/Feed1';
import Navbar from './componets/Navbar';
import Demo from './componets/Demo';

// const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: 'rgb(0, 0, 0)',
//       contrastText: 'white',
//     },
//   },
// });
function App() {
  return (
   
    <Box>

       {/* navbar */}
      <Navbar/>

     <Stack  direction="row" justifyContent="space-evenly" spacing={2} >
     
     <Sidebar/>
     <Feed1/>
      <Rightbar/>
     </Stack>
    </Box>

    
  );
}

export default App;
