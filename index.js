import express from "express"
import bodyParser from "body-parser"
import axios from "axios"
import {dirname} from "path"
import { fileURLToPath } from "url"
const _dirname=dirname(fileURLToPath(import.meta.url))
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
const api_key='50cf47187743a09f1ed4128ad95b6c4b'
//const api_url=''
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.post("/weather",async(req,res)=>{
    const latitude=req.body.lat;
    const longitude=req.body.lat;
    const api_key='50cf47187743a09f1ed4128ad95b6c4b'
    try{
     const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`);
      res.render("weather.ejs",{weather:response.data});
    }catch(error){
res.render("weather.ejs",{error_msg:"UNANLE TO FETCH WEATHER DETAILS"})
    }
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});