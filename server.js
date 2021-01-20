const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./Routes/blogRoutes');

//create express app
const app = express();

//register view engine using ejs tempelate view engine
app.set('view engine', 'ejs');

//middleware and static files for css
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));
//blogRoute
app.use('/blog', blogRoutes);

//database URI
const dbURI = 'mongodb+srv://maurice:matric007@cluster0.beoyu.mongodb.net/node-test?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology : true})
     .then((result) => {
        app.listen(port, () => {
          console.log('mongo db connected & server listining to port 3000');
        })
     })

     .catch((err) => {
       console.log(err)
     })
     


app.get('/', (req, res) => {
   //loading a static html file
   // res.sendFile('./views/index.html', {root : __dirname});
   //loading a dynamic html file ejs precisely
  //  const blogs = [
  //     {title: 'title-one', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  //     {title: 'title-Two', snippet: ' adipisicing elit. Debitis, voluptatem fuga'},
  //     {title: 'title-Three', snippet: 'Cum asperiores pariatur ea quod voluptate quisquam adipisci non'},
  //     {title: 'title-Four', snippet: 'quos hic earum sit sapiente aperiam necessitatibus'},
  //     {title: 'title-Five', snippet: 'perspiciatis voluptates! Dolor.'},
  //  ]
   res.redirect('/blog');
});


app.get('/about', (req, res) => {
   //  res.sendFile('./views/about.html', {root : __dirname})
   res.render('about', {title: 'About'});
 }); 


  //error page
  app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
  });
  

  //set the port number
  const port = process.env.PORT || 3000