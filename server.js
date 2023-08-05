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

//Routes Links Here && then establish the app.use(route-you-use,RouteNameInstance)
const userRoute=require('./Routes/userRoutes')
const authRoute=require("./Routes/authRoutes") //established authRoute

//testing the section routes
const sectionRoute=require('./Routes/sectionRoutes')

//testing the grades routes
const gradesRoute=require("./Routes/gradesRoutes")

//The express.json() function is a built-in middleware function in Express. 
//It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json())
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute) //established route for Auth
app.use("/api/section",sectionRoute)//established route for Section
app.use("/api/grades",gradesRoute)//established route for grades

//testing for verification live server
app.get("/",(req,res)=>{
    res.json({message:"Hello World"})
})



//established the server on PORT & responded below terminal display
app.listen(PORT, ()=>{
    console.log(`listening on PORT: http://localhost:${PORT}/`)
})