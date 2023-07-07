import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom';
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
    setblogs(data);
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
    let blogUrl=`/blogs/details/${blog._id}`

    return(
      <div className='content-box'>
        <Link key={blog._id} to={blogUrl}>
          
          <div>
          
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          

        </div>
        </Link>

        <br/>
       <br/>
      </div>
      
    )
  })
  

  return(<div>{blogs.length===0?"No blogs yet":blog}</div>)
  
}

export default Showblogs