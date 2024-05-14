import {db} from "../db/config.ts";
import {DataTypes, Sequelize} from "sequelize";

let attack = db.define("Attack", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojoCast: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    staminaCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default attack;