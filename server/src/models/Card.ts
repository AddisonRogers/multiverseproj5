import {db} from "../db/config.ts";
import {DataTypes, Sequelize} from "sequelize";

let card = db.define("Card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stamina: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default card;