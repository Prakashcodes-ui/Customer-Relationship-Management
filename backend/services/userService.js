import User from '../models/User.js';

// READ ALL
export const getUsers = async () => {
    return await User.findAll();
};

// READ ONE
export const getUserById = async (id) => {
    return await User.findByPk(id);
};

// UPDATE
export const updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(data);
};

// DELETE
export const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return true;
};

//CHANGE ROLE
export const changeRole = async (id, role) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update({role});
};

//CHANGE STATUS
export const changeStatus = async (id, status) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update({status});
};