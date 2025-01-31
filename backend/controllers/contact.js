import {Contact} from "../models/Contact.js";

export const contact = async(req,res)=>{
    try{
        const {name,email,phone,message} = req.body;

        if(!name || !email || !phone || !message){
            return res.status(400).json({
                message: "something missing",
                success: true
            })
        }
        await Contact.create({
            name,
            email,
            phone,
            message
        });
        return res.status(201).json({
            message: "Registered successfully.",
            success: true
        });
    }
    catch(error){
        console.log(error)
    }
}