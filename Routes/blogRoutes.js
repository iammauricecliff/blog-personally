const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');


//navigate to our create route
router.get('/create', blogController.blog_create_get);


//all our blog routes
   //fetch all our blogs
router.get('/', blogController.blog_index) 

//for our route parameters to navigate to the blog detail
router.get('/:id', blogController.blog_details);

//post to our db 
router.post('/', blogController.blog_create_post);
    

//for the delete blog responding to an ajax delete request from the browser
router.delete('/:id', blogController.blog_delete);
 
  //redirect 
  router.get('/-us', (req, res) => {
      res.redirect('/blog');
  })

  module.exports = router;