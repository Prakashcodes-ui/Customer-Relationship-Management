import bcrypt from "bcryptjs";
import User from "./models/User.js";
import sequelize from "./config/database.js";

const createAdmin = async () => {
    try {
        await sequelize.authenticate();

        const hashedPassword = await bcrypt.hash(
            "password123",
            10
        );

        const existingAdmin = await User.findOne({
            where: {
                email: "admin@test.com"
            }
        });

        if (existingAdmin) {
            console.log("Admin already exists");
            return;
        }

        await User.create({
            name: "Admin",
            email: "admin@test.com",
            password: hashedPassword,
            phone: "9876543210",
            role: "ADMIN",
            status: "ACTIVE"
        });

        console.log("Admin created successfully");

    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
};

createAdmin();