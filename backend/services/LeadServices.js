import Lead from "../models/Lead.JS";

//CREATE LEAD
export const createLead = async(data) => {
    return await Lead.create(data)
}