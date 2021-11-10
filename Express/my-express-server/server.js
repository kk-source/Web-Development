const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response)=>{
    console.log(request);
    response.send("hello");
    // response.send("<h1>Hello world!</h1>")
})
app.get("/contact", (req, res)=>{
    res.send("contact me");
})
app.get("/about", (req, res)=>{
    res.send("I am kartik");
})
app.get("/hobbies", (req, res)=>{
    res.send("I love tech gadgets.");
})
app.listen(3000, function(){
    console.log("server started");
});