const Blog=require('../models/Blog');


const GET_BLOGS=(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.json({blogs:result,status:200})
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

const POST_BLOG=(req,resp)=>{
    
    const blog=new Blog(req.body);
    console.log(blog)
    blog.save()
    .then((result)=>{
        resp.json({status:200,blog:result})
    })
    .catch((err)=>{
        resp.json({status:404,message:err.message})
    })

}



module.exports={
    GET_BLOGS:GET_BLOGS,
    POST_BLOG:POST_BLOG,

    };