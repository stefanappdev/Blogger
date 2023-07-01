import React from 'react'

import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './components/Home';
import Createblog from './components/Blogs_view/createblog';
import Blogs_Main from './components/Blogs_view/Blogs_Main';
import Showblogs from './components/Blogs_view/showblogs';
import Error404 from './components/404';
function App() {
  return (
    <div>
      <Router>


        <nav>

        <Link to="blogs">blogs</Link>
        <Link to="/"> Home</Link>
        </nav>


          <Routes>
          <Route path="/" element={<Home/>}/>
         
          <Route path="blogs" element={<Blogs_Main/>}>
           <Route path="/blogs/create" element={<Createblog/>}/>
           <Route path="/blogs/view" element={<Showblogs/>}>
           </Route>
           
          </Route>

          <Route path="*" element={<Error404/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App