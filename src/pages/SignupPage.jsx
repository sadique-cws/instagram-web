import React from 'react'
import {Card,CardContent,Typography,Button} from '@mui/material'
import {Link} from 'react-router-dom'
const css = {
    container:{
        flex:1,
        backgroundColor:"#ddd",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    box:{
        width:"25%",backgroundColor:"white",height:"500px",border:"1px solid lightgrey"
    },
    body:{
        padding:10,
    },
    logo:{
        width:"50%",marginLeft:"25%",marginTop:"20px",
    },
    loginHeading:{color:"grey",textAlign:"center",fontSize:18,fontWeight:600
}
}

function SignupPage() {
  return (
    <div style={css.container}>

        <div style={css.box}>
            <div style={css.body}>
                <div style={css.logo}>
                    <img src="assets/homePage/logo.png" width="100%"/>
                </div>
                <h4 style={css.loginHeading}>
                    Sign up to see photos and videos from your friends.
                </h4>
            </div>

            
        </div>
        <Card sx={{mt:2,pb:0,width:"100%"}}>
            <CardContent sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Typography>already have an account?</Typography>
                <Button variant='text' sx={{fontSize:10,color:"blue"}} LinkComponent={Link} to="/">Login</Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default SignupPage