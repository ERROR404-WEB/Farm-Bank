import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app=express();
app.use(express.json());
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://kiranrevanth:vizagvizag@cluster0.9ptehyv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL , (err) => {
    if(err){
        console.log(err);
    }
})

const farmer_data=new mongoose.Schema({
    name:String,
    phone:String,
    password:String,
    adhaar:String,
    state:String,
    city:String,
    street:String,
})

const investor_data=new mongoose.Schema({
    name:String,
    phone:String,
    password:String,
    adhaar:String,
    state:String,
    city:String,
    street:String,
})


const farmer_friends=new mongoose.Schema({
    name:String,
    friends:[String]
})

const farmer_data_model=new mongoose.model("farmer_data_model",farmer_data);
const investor_data_model=new mongoose.model("investor_data_model",investor_data);
const farmer_friends_data_model=new mongoose.model("farmer_frinds_data_model",farmer_friends);

app.post("/",function(req,res){
    //console.log(req.body);
    const x=new farmer_data_model(req.body);
    /////only printing the data , not sending it to data base , please take care of this//////////////////
    //console.log(x);
    x.save();
    const y=new farmer_friends_data_model({name : req.body.name,friends: []});
    y.save();
    res.send("yes");
})

app.post("/investors",function(req,res){
    //console.log(req.body);
    const x=new investor_data_model(req.body);
    /////only printing the data , not sending it to data base , please take care of this//////////////////
    //console.log(x);
    x.save();
    res.send("yes");
})

app.post("/get_farmers",function(req,res){
    //console.log(req.body);
    var c=0;
    farmer_data_model.find({adhaar:(req.body).adhaar},function(err,abc){
        if(err)
        {
            console.log("error");
        }
        else
        {
            console.log("good");
           res.send(abc);
        }
    })

})

app.post("/get_investors",function(req,res){
    //console.log(req.body);
    var c=0;
    investor_data_model.find({adhaar:(req.body).adhaar},function(err,abc){
        if(err)
        {
            console.log("error");
        }
        else
        {
            console.log("done");
           res.send(abc);
        }
    })

})


//////////*****************************CHAT APPLICATION**********************/////////////////////////////////

app.post("/get_all_investors",function(req,res){
    //console.log(req.body);
    var c=0;
    investor_data_model.find({},function(err,abc){
        if(err)
        {
            console.log("error");
        }
        else
        {
            console.log("done");
           res.send(abc);
        }
    })

})

app.post("/get_friends",function(req,res){
    farmer_friends_data_model.find({name:(req.body).name},function(err,abc){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(abc[0].friends);
        }
    })
})

app.post("/add_friends",async function(req,res){
    //console.log((req.body).text);
    await farmer_friends_data_model.updateOne({name:(req.body).name},{ $push : {friends : `${(req.body).text}`}},{new:true});
    console.log("once try");
})


app.post("/remove_friend",function(req,res){
    farmer_friends_data_model.updateOne({name:(req.body).name},{ $pop :{friends : (req.body).text}});
})



















//////////*****************************CHAT APPLICATION**********************/////////////////////////////////
app.listen(5000,()=>{
    console.log("server running");
});