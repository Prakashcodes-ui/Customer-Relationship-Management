import Customer from "../models/Customer.js"

//CUSTOMER CREATED
export const createCustomer = async(data) => {
    return await Customer.create(data)
}

//CUSTOMER UPDATED
export const updateCustomer = async(id, data) =>{
    const customer = await Customer.findByPk(id);
    if(!customer) return null;
    return await customer.update(data)
}