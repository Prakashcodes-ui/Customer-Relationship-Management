import { createLead } from "../services/leadServices.JS";

//CREATE LEAD
export const createLeads = async(req, res) => {
    try{
        const {name, email, phone, companyName, source, status, assignedTo, createdBy, notes} = req.boy;
        if(!name || !email || !phone || !companyName || !source || !status || !assignedTo || !createdBy || !notes){
            return res.status(400).json({
                message:"All fields are required"
            });
        }
        const lead = await createLead(req.body);
        res.json({message:"Lead created succefully", lead})
    }catch(error){
        res.status(500).json({error:error.message});
    }
};