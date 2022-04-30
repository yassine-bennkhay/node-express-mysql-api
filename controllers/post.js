//Insert data-Post 1
const mysql = require('mysql');
const db=require('../connection');

exports.addPosts= (req,res,next)=> {
    const title= req.body.title;
    const content= req.body.content;
    let post={title: title,content:content};
    const sql = 'INSERT INTO posts SET ?';
    db.query(sql,post,(err,result)=>{
        if (err) {
            throw err;
        };

        res.status(201).json({
            status: 'success',
            data:{title: title,content:content}
    
    });
        
    });
};

//select post

exports.getPosts=(req,res)=>{
    let sql = 'SELECT * FROM posts';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log(results);
        res.send(results);
        
    });
};
