var express=require("express");
var app=express();
var path=require("path");

app.use(express.static("public"))
const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]
app.get("/",(req,res)=>{
    res.send("HELLO WORLD")
})

app.get("/api/inventoryItems",(req,res)=>{
  res.send(inventoryItems);
})
app.listen(6000,()=>{
    console.log("Server is started")
})