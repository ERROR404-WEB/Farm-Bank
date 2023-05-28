import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app=express();
//const mong=mongoose();

app.use(cors());//avoidin the error while requesting 
app.use(express.json());//convertin the request data into json format


const URL="mongodb+srv://kiranrevanth:vizagvizag@cluster0.9ptehyv.mongodb.net/namasthee";
mongoose.connect(URL);
const abc=new mongoose.Schema({
    id1: String,
    id2: String,
    id3: String,
});


const def=mongoose.model("def",abc);

app.post("/",(req,res)=>{
    //var a=req.body.id1;
    //console.log(req.body);
    //console.log("hlooooo");
    const abcd=new def(req.body);
    abcd.save();
})


app.listen(5000,()=>{
    console.log("server running");
})