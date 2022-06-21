import { Avatar, Card, CardContent } from '@mui/material'
import React from 'react'

import "../App.css";

const Stories = () => {
  return (
   <Card elevation={0} sx={{border:"1px solid #ddd"}}>
       <CardContent sx={{display:"flex",gap:"5px"}}>
            <Avatar sx={{width:"70px",height:"70px"}} className="gradient-border-bg" src="assets/pc.jpg"/>
            <Avatar sx={{width:"70px",height:"70px"}} className="gradient-border-bg" src="assets/pc.jpg"/>
            <Avatar sx={{width:"70px",height:"70px"}} className="gradient-border-bg" src="assets/pc.jpg"/>
            <Avatar sx={{width:"70px",height:"70px"}} className="gradient-border-bg" src="assets/pc.jpg"/>
            <Avatar sx={{width:"70px",height:"70px"}} className="gradient-border-bg" src="assets/pc.jpg"/>

       </CardContent>
   </Card>
  )
}

export default Stories