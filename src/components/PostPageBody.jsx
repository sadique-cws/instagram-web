import React from 'react'
import {Container,Grid,Box, Typography, Card, IconButton,Button, Stack} from '@mui/material'
import Stories from './Stories'
// import allPost from '../data/posts'
import user from '../data/user'
import { useState } from 'react'
import {db} from '../firebase'
import {collection,query, onSnapshot, orderBy} from 'firebase/firestore' 
import { useEffect } from 'react'

const PostCardHeader = ({post}) => {
    return (
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",p:1}}>
            <Box sx={{display:"flex",flexDirection:"row",flex:1,gap:1,alignItems:"center"}}>
                <img src="https://picsum.photos/30/30?random=2" style={{borderRadius:"50%"}}/>
                <Typography>{post.user}</Typography>
            </Box>
            <Box sx={{flex:0}}>
                <IconButton>
                    <img src="https://img.icons8.com/tiny-glyph/16/000000/experimental-more-tiny-glyph.png"/>
                </IconButton>
            </Box>
        </Box>
    )
}



const PostCardFooter = ({post}) => {
    const [isLikes,setisLike] = useState(false);
    const [isSaved,setisSaved] = useState(false);
    return (
        <Box>
            <Box  sx={{display:"flex",flexDirection:"row"}}>
                {/* icons panel */}
            <Box sx={{flex:1}}>
                <IconButton onClick={() => setisLike(!isLikes)}>
                {(isLikes)? 
                        <svg aria-label="Unlike" class="_ab6-" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    :
                    <svg aria-label="Like"  color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
               }
                </IconButton>               
                <IconButton>
                <svg aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                </IconButton>
                <IconButton>
                <svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </IconButton>
            </Box>
            <Box>
                <IconButton onClick={() => setisSaved(!isSaved)}>
                {
                    isSaved ? 
                    <svg aria-label="Remove" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path></svg>
                    :
                    <svg aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                }
                </IconButton>
            </Box>
            </Box>
            {
                post.likes > 0 && <Box sx={{p:1}}>
                <Typography sx={{fontWeight:"500"}}>{post.likes} {post.likes == 1 ? "Like" : "Likes"}</Typography>
            </Box>
            }
            <Box className="comments">
                {
                    (post.comments.length > 0) && (
                    <>
                    <Typography>View all {post.comments.length}{(post.comments.length == 1)? " comment" : " comments"} </Typography>
                   { post.comments.map((commentValue, index) => (
                        <Box sx={{display:"flex",gap:1}}>
                        <Typography sx={{fontWeight:"bolder"}}>{commentValue.user} </Typography>    
                        <Typography>{commentValue.comment} </Typography>    
                    </Box>
                    ))}
                    </>
                    )
                }
            </Box>


            
        </Box>
    )
}

const PostCardBody = ({post}) => {
    return (
        <img src={post.imageURL} style={{width:"100%"}}/>
    )
}


const PostCard = ({post}) => {
    return (
        <Card sx={{mt:1}} elevation={0}>
            <PostCardHeader post={post}/>
            <PostCardBody post={post}/>
            <PostCardFooter post={post}/>
        </Card>
    )
    }

const Peoples = ({data}) => {
    return (
        <Box sx={{display:"flex",justifyContent:"space-between",padding:"5px",alignItems:"center"}}>
            <Box sx={{display:"flex",justifyContent:"flex-start"}}>
                <Box>
                    <img src={data.profilePic} style={{width:"40px",height:"40px",margin:2,borderRadius:"50%"}}/>
                </Box>
                <Box sx={{ml:1}}>
                    <Typography sx={{fontSize:"16px",fontWeight:"600"}}>{data.name}</Typography>
                    <Typography sx={{fontSize:"12px",color:"grey",marginLeft:"4px"}}>Follow you</Typography>
                </Box>
            </Box>
            <Box>
                <Button sx={{fontSize:"14px",textTransform:"capitalize"}}>Follow</Button>
            </Box>
        </Box>
    )
}
const PostPageBody = () => {
    const [postData,setPostData] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("user",'asc'))
        onSnapshot(q, (querySnapshot) => {
                setPostData(querySnapshot.docs.map((doc) => (doc.data())))
        })
        console.log(postData)
    },[])
  return (
    <Box sx={{paddingX:20,flex:1,height:"auto",backgroundColor:"#efefef"}}>
        <Container sx={{pt:4}}>
            <Grid container>
                <Grid item lg={6}>
                    <Stories/>
                    {
                        postData.map((value, index) => (
                            <PostCard post={value} key={index}/>
                        ))
                    }
                </Grid>
                <Grid item lg={6} >
                    <Box sx={{padding:"15px",position:"fixed",right:"250px",minWidth:"25%"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between"}}>
                            <Typography>Suggestions For You</Typography>
                            <Typography>See All</Typography>
                        </Box>
                    <Stack>
                        
                        {
                            user.map((value,index) => (
                                <Peoples data={value} key={index}/>
                            ))
                        }
                    </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default PostPageBody