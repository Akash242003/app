const express = require("express")
const path = require('path')
const app = express();
const fs = require('fs')

const port = 400;


app.use("/static", express.static('static'));
app.use(express.urlencoded());
nod


app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views') );

app.get('/', (req,res)=>{
    const con = "ANDORID DEVELOPMENT COURSE";
    const item = {'title':'ADC', "content":con}
    res.status(200).render('index.pug', item);
})

app.post('/', (req,res)=>{
    Name = req.body.Name
    age = req.body.age
    address = req.body.address
    college = req.body.college
    course = req.body.course
    mobile = req.body.mobile
    feedback = req.body.feedback
    let customerinfo = `The customer name is ${Name}, the age is ${age}, the address is ${address}, the college name is ${college}, the client course is ${course}, the client contact number is ${mobile}, the feedback is ${feedback}`
    fs.writeFileSync('info.txt', customerinfo)
    const item = {'message':'Your ADC form is submitted successfully'}
    res.status(200).render('index.pug', item);
})

app.listen(port, ()=>{
  console.log(`the port is successfully on the port ${port}`);
})
