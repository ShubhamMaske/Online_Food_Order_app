import express = require("express");
import {CreateVandor,GetVandors,GetVandorById} from "../controllers";

const router = express.Router();

router.post('/vandor',CreateVandor);
router.get('/vandors',GetVandors);
router.post('/vandor/:id',GetVandorById);


router.get('/',(req, res, next)=>{
    res.json({message: "hello from AdminRoutes"})
})



export {router as AdminRoute};