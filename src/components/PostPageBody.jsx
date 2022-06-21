import React from 'react'
import {Container,Grid,Box} from '@mui/material'
import Stories from './Stories'
const PostPageBody = () => {
  return (
    <Box sx={{paddingX:20,flex:1,height:"100vh",backgroundColor:"#efefef"}}>
        <Container sx={{pt:4}}>
            <Grid container>
                <Grid item lg={6}>
                    <Stories/>
                </Grid>
                <Grid item lg={6}>
                    {/* <h1>this is peoples may you know section</h1> */}
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default PostPageBody