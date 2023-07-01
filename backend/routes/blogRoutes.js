const express=require('express');
const router=express.Router();
const blogController=require('../controllers/blogController.js');


router.get('/',blogController.GET_BLOGS);
router.post('/',blogController.POST_BLOG);









module.exports=router;