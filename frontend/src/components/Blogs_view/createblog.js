
import React,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Createblog(){
  const navigate=useNavigate();
  const[formdata,setFormData]=useState({title:'',snippet:'',body:''});

  const handleChange=(e)=>{
    setFormData({...formdata,[e.target.name]:e.target.value});
  }

  const clearForm=()=>{
    setFormData(prevFormdata=>{
      return{
        title:'',
        snippet:'',
        body:''
      }
    });
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    let url="http://localhost:5000/blogs";
    
      
      const data=formdata
       try{ 
       fetch(url,{method:'POST',headers: {
           'Content-Type': 'application/json;charset=utf-8'
       },
       body:JSON.stringify(data)
    })
       .then(resp=>resp.json())
       .then(result=>console.log(result));
       }catch(err){
           console.log('Something went wrong',err.message)
    }
    
    navigate('/blogs/view');
    
    
     

     }
    return(
        <form onSubmit={handleSubmit} >
            <label>Title:
                <input type="text" 
                name="title" 
                id="title"
                value={formdata.title} 
                onChange={handleChange} 
                placeholder="Enter a title" 
                />

            </label>

            <label>snippet:
                <input 
                id='snippet'
                type="text" 
                name="snippet" 
                value={formdata.snippet} 
                placeholder=' Enter a snippet' 
                onChange={handleChange}
                
                />
            </label>

            <label>
                Body:
                <input 
                type="text" 
                id='body'
                name="body" 
                value={formdata.body} 
                onChange={handleChange} 
                placeholder='Enter a body' 
                />
            </label>

            <button  type='submit'>submit</button>
        </form>
    )
}


export default Createblog