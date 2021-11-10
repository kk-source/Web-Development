const express=require('express');
const https = require('https');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{

  res.sendFile(__dirname+"/index.html");

})

app.listen(3000, (req, res)=>{
    console.log("server started");
})

app.post("/", (req, res)=>{
  console.log("post received");

  const query=req.body.City;
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=9833db43695cac454ef388bab24f4471&units=metric";

  https.get(url, function(response){
    // console.log(response);

    response.on("data", (data)=>{
      const weatherData=JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon=weatherData.weather[0].icon;
      const iconurl='http://openweathermap.org/img/wn/'+icon+'@2x.png'
      console.log(temp);
      const description=weatherData.weather[0].description;
      console.log(description);
      // console.log(weatherData); 
      
      // const obj={
      //   name: "kartik", 
      //   sister: "mansi"
      // }
      // console.log(JSON.stringify(obj));
      res.write("<h1>The temperature in "+query+" is "+temp+" degree Celcius</h1>");
      res.write("<p> The weather is "+description+".</p>");
      res.write("<img src="+iconurl+">")
      res.send();
    })
  })
})