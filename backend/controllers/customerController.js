import { createUser } from "../services/customerService.js";

export const createUsers = async(req, res) => {
    try{
        const customer = await createUser(req.body);
        res.json({message:"customer created succefully",customer})
    }catch(error){
        res.status(500).json({error:error.message});
    }
};