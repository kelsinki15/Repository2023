import { DataTypes } from "sequelize";
import sequelize from "../utils/database";

const Teacher = sequelize.define('teachers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },
    name: {
            type: DataTypes.STRING,
            allowNull: false,
    },
    email: DataTypes.STRING,
    gender: DataTypes.STRING 
});

export default Teacher;