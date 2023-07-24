import express = require("express");

const router = express.Router();

router.get('/',(req, res, next)=>{

    res.json({message: "hello from VandorRoutes"})

})



export {router as VandorRoutes};