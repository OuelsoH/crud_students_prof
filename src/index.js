const express = require('express')

const app = express()
port = 3003;
hostname= "127.0.0.1"




app.listen(port, hostname, ()=>{
    console.log(`app listen on ${port} hosting on ${hostname}`)
});