import { expect, test, describe, afterAll, beforeAll } from "bun:test";
import {db} from "../db/config.ts";
import { DataTypes } from "sequelize";
import Attack from "./Attack.ts";
import Card from "./Card.ts";

beforeAll(async () => {
    await db.sync();
})

describe('Attack Model', () => {
    test('Should have correct properties', async () => {
        const attributes = Attack.getAttributes();

        expect(attributes).toHaveProperty('id');
        expect(attributes.id).toEqual(expect.objectContaining({
            autoIncrement: true,
            primaryKey: true,
            type: expect.objectContaining({
                options: {},
            }),
        }));

        expect(attributes).toHaveProperty('title');
        expect(attributes.title).toEqual(expect.objectContaining({
            type: expect.objectContaining({
                _length: 255,
                options: expect.objectContaining({}),
            }),
            allowNull: false,
        }));

        expect(attributes).toHaveProperty('mojoCast');
        expect(attributes.mojoCast).toEqual(expect.objectContaining({
            type: DataTypes.INTEGER,
            allowNull: false,
        }));

        expect(attributes).toHaveProperty('staminaCost');
        expect(attributes.staminaCost).toEqual(expect.objectContaining({
            type: DataTypes.INTEGER,
            allowNull: false,
        }));
    });
});