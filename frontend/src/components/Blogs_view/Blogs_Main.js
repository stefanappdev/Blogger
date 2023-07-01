
import React, { useEffect,useState } from 'react'
import { Link,Outlet,useNavigate} from 'react-router-dom';
function Blogs_Main() {
  const navigate=useNavigate();


  return (
    <div>
   
    
    

   <nav>
   <Link to="/blogs/create"> create a new blog</Link>
   <Link to="/blogs/view"> See our blogs</Link>
   </nav>

   <Outlet/>


    <button onClick={()=>navigate(-1)}>go back</button>

    


    </div>
  )
}

export default Blogs_Main