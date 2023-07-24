import express = require('express');
import {AdminRoute, VandorRoutes} from "./routes";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/admin',AdminRoute);
app.use('/vandor',VandorRoutes);


app.listen(3000,()=>{
    console.log("App running on port 3000");
})