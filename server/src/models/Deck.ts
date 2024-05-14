import {db} from "../db/config.ts";
import {DataTypes, Sequelize} from "sequelize";

let deck = db.define("Deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    xp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default deck;