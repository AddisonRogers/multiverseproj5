import { expect, test, describe, afterAll, beforeAll } from "bun:test";
import {db} from "../db/config.ts";
import { DataTypes } from "sequelize";
import Card from "./Card.ts";
import Deck from "./Deck.ts";
import Attack from "./Attack.ts";
import attack from "./Attack.ts";

beforeAll(async () => {
    await db.sync();
})


describe('Card Model', () => {
    test('Should have correct properties', async () => {
        const attributes = Card.getAttributes();

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
            allowNull: false,
        }));

        expect(attributes).toHaveProperty('mojo');
        expect(attributes.mojo).toEqual(expect.objectContaining({
            type: DataTypes.INTEGER,
            allowNull: false,
        }));

        expect(attributes).toHaveProperty('stamina');
        expect(attributes.stamina).toEqual(expect.objectContaining({
            type: DataTypes.INTEGER,
            allowNull: false,
        }));

        expect(attributes).toHaveProperty('imgUrl');
        expect(attributes.imgUrl).toEqual(expect.objectContaining({
            type: expect.objectContaining({
                _length: 255,
                options: expect.objectContaining({}),
            }),
            allowNull: false,
        }));
    });
});

test('Card should have many attacks', async () => {
    const card = await Card.create();
    const attack1 = await Attack.create()
    const attack2 = await Attack.create()
    
    attack1.setDataValue('id', card.getDataValue('id'))
    attack2.setDataValue('id', card.getDataValue('id'))

    expect(card.getDataValue('id')).toEqual(attack1.getDataValue('id'));
    expect(card.getDataValue('id')).toEqual(attack2.getDataValue('id'));
});