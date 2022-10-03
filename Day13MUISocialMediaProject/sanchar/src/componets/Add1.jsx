import styled from '@emotion/styled';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'


const StyledModal = styled(Modal)({
  display : "flex",
  alignItems : "center",
  justifyContent : "center",
 
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
const Add1 = () => {
  const [open ,setOpen] = useState(false)
  return (
    <>
    <Tooltip
    onClick={(e) => setOpen(true)}
    title="Add"
    sx={{
      position: "fixed",
      bottom: 20,
      left: { xs: "calc(50% - 25px)", md: 30 },
    }}
  >
    <Fab color="primary" aria-label="add">
     <h1>+</h1>
    </Fab>
  </Tooltip>

  <StyledModal
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  width={400} height={280} bgcolor = "white" p={3} borderRadius={5} >
  
    <Typography id="modal-modal-description"  textAlign="center"  color= "black" varient={"h6"}  sx={{ mt: 2 }}>
   Create Post 
    </Typography>

    {/* user box */}
    <UserBox>
            <Avatar
              src="https://media-exp1.licdn.com/dms/image/C5603AQELgoVZqcbHfQ/profile-displayphoto-shrink_100_100/0/1647699042920?e=1670457600&v=beta&t=sk4FurvheboQBehrGEezrXfLlu4xKG23UMgr7x7k4og"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Govind Sahu
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What's on your mind?"
            variant="standard"
          />

          {/* icon */}
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            {/* <Image color="secondary" /> */}
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          {/* button group */}
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button >Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
  </Box>

  {/* user box */}
</StyledModal>

  </>
  )
}

export default Add1
