const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
})
app.get('/BMI', (req, res) => {
  res.sendFile(__dirname+"/bmi.html");
})

app.post("/", (req, res)=>{

    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);

    var result=n1+n2;

    res.send("The result of the calculation is "+result);
})
app.post("/BMI", (req, res)=>{

  var n1=parseFloat(req.body.n1), n2=parseFloat(req.body.n2);
    
  var result=n1/(n2*n2);

  res.send("Your BMI is : " + result);
})

app.listen(3000, () => {
  console.log("server started on port 3000")
})