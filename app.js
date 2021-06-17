const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const internal=require(__dirname+"/internal.js");
const app=express();

let items=[];
let workItems=[];
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get("/",function(req,res){
let day=internal.getDate();
res.render("list",{kindOfDay: day, newListItem: items});
});

app.post("/",function(req,res){
  let item=req.body.newItem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
  res.redirect("/");
    }
});
app.get("/work", function(req,res) {
res.render("list",{kindOfDay:"Work List", newListItem:workItems});
});

app.listen(process.env.PORT || 3000,function(){
  console.log("Server is running on port 3000.");

});
