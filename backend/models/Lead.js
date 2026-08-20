import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Lead = sequelize.define(
  "Lead",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
 
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"),
      defaultValue: "NEW",
      allowNull: false,
    },

    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  },
  {
    tableName: "leads",
    timestamps: true,
  }
);

export default Lead;