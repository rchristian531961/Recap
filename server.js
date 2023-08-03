//express imported
const express=require('express');
//Server initiated
const app=express();
//PORT ESTABLISHED
PORT=5000;

//Router Link

//The express.json() function is a built-in middleware function in Express. 
//It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json())



//established the server on PORT & responded below terminal display
app.listen(PORT, ()=>{
    
    console.log(`listening on PORT: http://localhost:${PORT}/`)
})