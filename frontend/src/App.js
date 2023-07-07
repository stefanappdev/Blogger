import React, { useEffect, useState } from 'react'

import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './components/Home';
import Createblog from './components/Blogs_view/createblog';
import Blogs_Main from './components/Blogs_view/Blogs_Main';
import Showblogs from './components/Blogs_view/showblogs';
import Error404 from './components/404';
import Blogdetails from './components/Blogs_view/Blogdetails';
import './styles/App.css'
import { AppBar,Toolbar,Typography, Button, Menu, MenuItem,IconButton,Box }  from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {

  const pages=['Show blogs','Create blogs'];
  const [MenuItems,setMenuItems]=useState();
  const [AnchorEl,setAnchorEl]=useState();

  const Open=()=>{
    Boolean(MenuItems)
  }

  const Close=()=>{
    setMenuItems(null);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>

     


      
      <Router>


        <AppBar variant='contained' >
          <Toolbar>
            <Typography>
              My Sample blogger App
            </Typography>

            
            

              
            <Button sx={{marginLeft:'auto'}} variant='text'> <Link to="/" id='home'> Home</Link> </Button>  
            <Button sx={{marginLeft:'10px'}} variant='text'> <Link to="blogs" id='blogs'>blogs</Link> </Button>

          
          </Toolbar>
        </AppBar>


          <Routes>

              <Route path="/" element={<Home/>}/>
         
              <Route path="blogs" element={<Blogs_Main/>}>
                <Route path="/blogs/create" element={<Createblog/>}/>

                <Route path="/blogs/view" element={<Showblogs/>}/>

                <Route path="/blogs/details/:id" element={<Blogdetails/>}/> 
               
                

              </Route>

              <Route path="*" element={<Error404/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App