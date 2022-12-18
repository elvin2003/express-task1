const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

const employee1 = {
  id: 1,
  name: "Jack",
  age: 26
}
const employee2 = {
  id: 2,
  name: "Sergio",
  age: 38
}
const employee3 = {
  id: 3,
  name: "Conor",
  age: 30
}

const employees = [employee1,employee2,employee3];

app.use(express.static(__dirname+"/public"));

app.get("/",(req,res)=>{
  res.send(employees);
})

app.listen(PORT,()=>{
  console.log("App started on port "+PORT);
});