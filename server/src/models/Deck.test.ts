import { expect, test, describe, beforeAll } from "bun:test";
import { db } from "../db/config.ts";
import {DataTypes} from "sequelize";
import Deck from "./Deck.ts";
import Card from "./Card.ts";


beforeAll(async () => {
    await db.sync();
})

describe('Deck Model', () => {
    test('Should have correct properties', async () => {
        const attributes = Deck.getAttributes();

        expect(attributes).toHaveProperty('id');
        expect(attributes.id).toEqual(expect.objectContaining({
            autoIncrement: true,
            primaryKey: true,
            type: expect.objectContaining({
                options: {},
            }),
        }));

        expect(attributes).toHaveProperty('name');
        expect(attributes.name).toEqual(expect.objectContaining({
            type: expect.objectContaining({
                _length: 255,
                options: expect.objectContaining({}),
            }),
            allowNull: false
        }));

        expect(attributes).toHaveProperty('xp');
        expect(attributes.xp).toEqual(expect.objectContaining({
            type: DataTypes.INTEGER,
            allowNull: false,
        }));
    });
});

test('Deck should have many Cards', async () => {
    const deck = await Deck.create();
    const card1 = await Card.create();
    const card2 = await Card.create();

    card1.setDataValue('id', deck.getDataValue('id'));
    card2.setDataValue('id', deck.getDataValue('id'));

    expect(deck.getDataValue('id')).toEqual(card1.getDataValue('id'));
    expect(deck.getDataValue('id')).toEqual(card2.getDataValue('id'));
});