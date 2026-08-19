import Customer from "../models/Customer.js"

export const createUser = async(data) => {
    return await Customer.create(data)
}