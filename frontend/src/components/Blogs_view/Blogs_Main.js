
import React, { useEffect,useState } from 'react'
import { Link,Outlet,useNavigate} from 'react-router-dom';
import { Button,AppBar,Toolbar,Typography,Box } from '@mui/material';
function Blogs_Main() {
  const navigate=useNavigate();


  return (
    <div className='content-box'>
   
    
    

   <nav>
   <Link to="/blogs/create"> create a new blog</Link>
   <Link to="/blogs/view"> See your blogs</Link>
   </nav>
    
   <Outlet/>
   
   <br/>
   <br/>
   <br/>
   <br/>

    <div className='blog-back-button'>
    <Button variant='contained' onClick={()=>navigate(-1)}>go back</Button>
    </div>
    


    </div>
  )
}

export default Blogs_Main