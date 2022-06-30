import { Avatar, Card, CardContent, Typography,Box } from '@mui/material'
import React from 'react'

import "../App.css";
import users from '../data/user';

const Stories = () => {
  return (
   <Card elevation={0} sx={{border:"1px solid #ddd",pb:"-10px"}} >
       <Box sx={{display:"flex",gap:"5px",overflowX:"scroll",p:"10px",width:"100%"}} className="scrollable">
       
       {
        users.map((value, index) => (
        <Box>
          <Avatar sx={{width:"70px",height:"70px"}} className="gradient-border-bg" src={value.profilePic}/>
          <Typography sx={{fontSize:"12px",mt:1,textAlign:"center",pb:0,mb:0}}>{(value.name.length > 12)? value.name.slice(0,9)+"..." : value.name}</Typography>
          </Box>
        ))}     
       
       </Box>
   </Card>
  )
}

export default Stories