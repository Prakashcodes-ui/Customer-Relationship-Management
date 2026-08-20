import { createCustomer, updateCustomer } from "../services/customerService.js";

//CUSTOMER CREATED
export const createUsers = async(req, res) => {
    try{
        const {name, email, phone, companyName, address, status, assignedTo, createdBy} = req.body;
        if(!name || !email || !phone || !companyName || !address || !status || !assignedTo || !createdBy){
            return res.status(400).json({
                message:"All fields are required"
            });
        }
        const customer = await createCustomer(req.body);
        res.json({message:"customer created succefully",customer})
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

//UPDARTE CUSTOMER 
export const updateCustomers = async(req, res) => {
    try{
        const customer = await updateCustomer(req.params.id, req.body);
        if(!customer) return res.status(404).json({message:"customer not found"});
        res.json({message:"customer updated ", customer})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}