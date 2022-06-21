import { Card, Container,Grid,Typography,CardMedia,CardContent, Paper,TextField,Button, Divider } from '@mui/material'
import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
const styles = {
    container:{display:"flex",backgroundColor:"#fafafa",padding:0},
    gridContainer: {padding:"0px 200px",mt:1},
    card:{padding:"50px 100px"},
    mobileBg:{
        backgroundSize:"cover",
        backgroundColor:"transparent",
        backgroundImage:"url('assets/homePage/mobile.png')",
        width:"100%", 
        height:"530px"},
    // step 5
        slider:{
        margin:"27px 0 0 113px",
        position:"relative",
    },
    screenshort:{
        height: "480px",
        left: 25,
        position: "absolute",
        top: 20,
        width: "222px"
    }
}

const Homepage = () => {
    //step 1
    const images = ["screenshots1.png","screenshots2.png","screenshots3.png"]

    //step 2
    const [counter, setCounter] = useState(0)

    //step 3
    useEffect(() => {
        const internalData = setInterval(() => {
            counter = (counter == 2)? setCounter(0) : setCounter(counter + 1)
        },2000) 
        
        return () => clearInterval(internalData)
    },[counter])

  return (
    <Container sx={styles.container} maxWidth="xl">
        <Grid container  sx={styles.gridContainer}>
            <Grid item lg={6}>   
            <Paper elevation={0} sx={styles.mobileBg}>
                <div style={styles.slider}>
                    {/* step 4 */}
                    <img src={`assets/homePage/${images[counter]}`} width="100%" style={styles.screenshort}/>
                </div>
            </Paper>
            </Grid>
            <Grid item lg={6}>
                <Card sx={{width:"100%"}}>
                    <CardContent  sx={styles.card} >
                        <img width="100%" src="assets/homePage/logo.png"/>
                    </CardContent>
                    <CardContent sx={{px:6}}>
                            <TextField fullWidth="xl" InputProps={{disableUnderline:true}}  size="small" id="filled-basic" label="Email, Phone Number, Username" variant="filled" />
                            <TextField sx={{marginTop:1}} InputProps={{disableUnderline:true}} size="small"  fullWidth="xl" id="filled-basic" label="Password" variant="filled" />
                            <Button fullWidth sx={{mt:1}} color="primary" variant="contained">Login</Button>

                            <Divider sx={{color:"#202020",mt:2}}>OR</Divider>
                            <div style={{width:"100%",textAlign:"center",display:"flex",flexDirection:"column"}}>
                                    <Button variant='text'>Login with Facebook</Button>
                                    <Button variant='text' sx={{fontSize:10,color:"gray"}}>Forgot Password</Button>
                            </div>
                    </CardContent>
                </Card>

                <Card sx={{mt:2,pb:0}}>
                    <CardContent sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <Typography>Don't have an account?</Typography>
                        <Button variant='text' sx={{fontSize:10,color:"blue"}} LinkComponent={Link} to="/signup">Signup</Button>
                    </CardContent>
                </Card>

                <div style={{width:"100%",textAlign:"center",marginTop:20,marginBottom:10}}>
                    <Typography>Get the app.</Typography>

                    <Grid container spacing={5}>
                        <Grid item lg={6}>
                            <img src="assets/homePage/apple.png" width="100%"/>
                        </Grid>
                        <Grid item lg={6}>
                            <img src="assets/homePage/google.png" width="100%"/>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Homepage