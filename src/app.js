//  const express=require('express');
//  const app=express();
//  const path=require("path");
//  const port=8000;
// // public static path
// // console.log(path.join(__dirname, "../public"));
// const static_path=path.join(__dirname, "../public");

//  app.use(express.static(static_path)); 


//  app.get("/",(req,res)=>{
//      res.send("welcome to sahil page")

//  });
//  app.get("/about",(req,res)=>{
//      res.send("welcome to about page")

//  });
//  app.get("/weather",(req,res)=>{
//      res.send("welcome to weather page")

//  });
//  app.get("*",(req,res)=>{
//      res.send("404 error page oops!")

//  });
//  app.listen(port ,()=>{
//      console.log(`listneing to the port at ${port}`);
//  })

// using hbs engine  
const express=require('express');
const path=require("path");
const hbs=require("hbs");
const port=8000;
const app=express();

// public static path
// console.log(path.join(__dirname, "../public"));
const static_path=path.join(__dirname, "../public");
const template_path=path.join(__dirname, "../templates/views");
const partials_path=path.join(__dirname, "../templates/partials");
app.set('views',template_path);
app.set('view engine', 'hbs');

hbs.registerPartials(partials_path);
app.use(express.static(static_path)); 


app.get("/",(req,res)=>{
    res.render("index")

});
app.get("/weather",(req,res)=>{
    res.render("weather")

});
app.get("*",(req,res)=>{
    res.render("error")

});
app.listen(port ,()=>{
    console.log(`listneing to the port at ${port}`);
})