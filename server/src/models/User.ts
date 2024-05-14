import {db} from "../db/config.ts";
import {DataTypes, Sequelize} from "sequelize";

let user = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default user;