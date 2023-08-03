//express imported
const express=require('express');
//Server initiated
const app=express();
//PORT ESTABLISHED
const PORT=5000 ||process.env.PORT;

//import the env file
require('dotenv').config()

//Connect to database here 
const database=require('./dbConnect')

//Router Link
// const feedRoute=require('./Routes/feedRoutes')


//The express.json() function is a built-in middleware function in Express. 
//It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json())


//testing for verification live server



//established the server on PORT & responded below terminal display
app.listen(PORT, ()=>{
    console.log(`listening on PORT: http://localhost:${PORT}/`)
})