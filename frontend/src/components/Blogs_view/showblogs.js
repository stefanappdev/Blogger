import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
 function Showblogs() {


  const [blogs,setblogs]=useState([]);

  const fetchBlogs=async(api)=>
  {await fetch(api,{
    method:'GET', 
    'Content-Type':'application/json',
  })
  .then(resp=> resp.json())
  .then(data=>{
    console.log(data);
    setblogs(data.blogs);
    console.log(blogs);
  })
  }

  useEffect(()=>{
     fetchBlogs('http://localhost:5000/blogs')
  .catch(err=>{
    console.log('Something went wrong',err.message)
  })
  },[])

 


  const blog=blogs.map((blog)=>{
    return(
      
      <div>
        
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
        

      </div>
      
      
    )
  })
  

  return(<div>{blog}</div>)
  
}

export default Showblogs