const express=require('express');
const router=express.Router();
const postController=require('../controllers/post');

router.post('/addPost',postController.addPosts);
router.get('/allPosts',postController.getPosts);
module.exports=router;