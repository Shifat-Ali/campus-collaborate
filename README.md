# campus-collaborate
web  app designed for students to collaborate and showcase their projects and connect with like-minded peers. 
# To connect to cloud database
const express = require('express');
const {Client} = require('pg')

const client = new Client ({
    host:'ip adress of server',
    user:'postgres',
    port:'5432',
    password:'',
    database:'name of database'
})

client.connect();


client.query('SELECT * from users',(err,res)=>{
    if(!err){
        console.log("connection")
    }
    else{
        console.log(err.message)
    }
    client.end();
})
  