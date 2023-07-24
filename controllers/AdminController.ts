// import express = require("express");
import { Request, Response, NextFunction } from "express"
import { CreateVandorInput } from "../dto/Vandor.dto"
import { Vandor } from "../models/Vandor";


export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVandorInput>req.body;

    const existingVandor = await Vandor.findOne({email: email});
    if(existingVandor != null){
        return res.json({"message": "A vandor is existing with this emailId"});
    }

    const createdVandor = await Vandor.create({
        name: name,
        ownerName: ownerName,
        foodType: foodType,
        pincode: pincode,
        address: address,
        phone: phone,
        email: email,
        password: password,
        salt: ' ',
        serviceAvailable: false,
        coverImages: [],
        rating: 0
    })


    return res.json(createdVandor);
}

export const GetVandors = async (req: Request, res: Response, next: NextFunction) => {

}

export const GetVandorById = async (req: Request, res: Response, next: NextFunction) => {

}