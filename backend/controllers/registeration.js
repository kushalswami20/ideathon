import {Register} from "../models/Registeration.js"

export const register = async(req,res) =>{
    try{
        const {firstName, lastName, email, phone, address, city , state, zipCode,collegeName, collegeCity, Degree, yearOfStudy, dateOfBirth, gender}= req.body;

        if(!firstName || !lastName || !email || !phone|| !address || !city || !state || !zipCode || !collegeName || !collegeCity || !Degree || !yearOfStudy || !dateOfBirth || !gender){
            return res.status(400).json({
                message: "something missing",
                success: true
            })
        }
        await Register.create({
            firstName, 
            lastName, 
            email, 
            phone, 
            address, 
            city , 
            state,
            zipCode,
            collegeName, 
            collegeCity, 
            Degree, 
            yearOfStudy, 
            dateOfBirth, 
            gender
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