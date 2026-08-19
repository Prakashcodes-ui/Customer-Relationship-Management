import {getUsers, getUserById, updateUser, deleteUser, changeRole, changeStatus} from '../services/userService.js';

// GET ALL
export const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE
export const getSingleUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
export const updateUsers = async (req, res) => {
    try {
        const user = await changeRole(req.params.id, req.body);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User updated', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
export const deleteUsers = async (req, res) => {
    try {
        const result = await deleteUser(req.params.id);
        if (!result) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//CHANGE ROLE
export const changeRoles = async (req, res) => {
    try {
        const {role} = req.body;
        const user = await changeRole(req.params.id, role);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User role updated', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};  

//CHANGE STATUS
export const changeStatu = async (req, res) => {
    try {
        const {status} = req.body;
        const user = await changeStatus(req.params.id, status);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User status updated', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};