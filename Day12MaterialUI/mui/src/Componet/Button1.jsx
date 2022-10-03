import React from "react";
import Button from "@mui/material/Button";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
const Button1 = () => {
  return (
    <>
      <Button variant="contained">Hello World</Button>
      <Box 
      component="spen"
       m={1}>
       
        <Button variant="contained">box2</Button>
      </Box>

      <Box color="text.primary" clone>
      <Button variant="contained">box3</Button>
</Box>

   <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '30vh' }} />
      </Container>
    </>
  );
};

export default Button1;
