import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import PostPageBody from '../components/PostPageBody'
import PostPageHeader from '../components/PostPageHeader'


const InputButton = () => {
  const ref = React.useRef();

  return ( 
   <>
    <Button variant='contained' fullWidth onClick={() => ref.current.click()}>Upload</Button>
    <input type='file' ref={ref} style={{display:"none"}}/> 
    </>
  )

}

const PostInsert = ({isOpen,handleClose}) => {

  return (
    <Dialog open={isOpen} maxWidth="xs" onClose={handleClose}>
      <DialogTitle sx={{textAlign:"center"}}>
          Insert New Post 
      </DialogTitle>
      <Divider/>
        <DialogContent fullWidth>
            <Grid container spacing={1}>
                <Grid lg={4} item>
                    <img src='https://via.placeholder.com/100x100.png' style={{width:"100%"}}/>
                 
                    <InputButton/>
                </Grid>
                <Grid item lg={8}>
                    <TextField fullWidth multiline rows={6} placeholder="What`s in your mind?" variant='filled'  InputProps={{sx:{border:0},disableUnderline:true}}/>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button color="primary" variant='contained' fullWidth>Create new Post</Button>
        </DialogActions>
    </Dialog>
  )
}


const PostPage = () => {
  const [isOpen, setisOpen] = useState(false)

  const handleOpen = () => {
    setisOpen(true)
  }

  const handleClose = () => {
    setisOpen(false)
  }
  return (
    <div>
      <PostPageHeader handleOpen={handleOpen}/>
      <PostPageBody/>
      <PostInsert isOpen={isOpen} handleClose={handleClose}/>
    </div>
  )
}

export default PostPage