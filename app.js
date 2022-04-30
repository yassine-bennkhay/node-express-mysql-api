//bring in the express module
const express =require('express');
//bring in the body-parser module to parse the body of the request
const bodyParser =require('body-parser');
//bring in the post route
const postRoute=require('./routes/post');
//bring in db connection
const db=require('./connection');
//set up the express server
const app =express();
app.use(bodyParser.json());
app.use('/post',postRoute);

//Post 2
// app.get('/addpost4',(req,res)=>{
//     let post={title: 'Post 4',body:'this is post 4'};
//     let sql = 'INSERT INTO posts SET ?';
//     db.query(sql,post,(err,result)=>{
//         if (err) throw err;
//         console.log(result);
//         res.send('Post 4 added successfully!');
//     });
// });

//select posts


//select a single post
// app.get('/getpost/:id',(req,res)=>{
//     let sql = `SELECT * FROM posts WHERE id=${req.params.id}`;
//     db.query(sql,(err,result)=>{
//         if (err) throw err;
//         console.log(result);
//         res.send('Post fetched!');
//     });
// });

// create table
// app.get('/createpoststable',(req,res)=>{
//     let sql="CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), body VARCHAR(255))";
//     db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Post table created...');
//     });
// });
//start the server
app.listen('3031',()=>{
    console.log("Server started on port 3031")
});