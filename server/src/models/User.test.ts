import { expect, test, describe, afterAll, beforeAll } from "bun:test";
import {db} from "../db/config.ts";
import { DataTypes } from "sequelize";
import User from "./User.ts";

beforeAll(async () => {
  await db.sync();
})

describe('User Model', () => {
  test('Should have correct properties', async () => {
    const attributes = User.getAttributes();

    expect(attributes).toHaveProperty('id');
    expect(attributes.id).toEqual(expect.objectContaining({
      autoIncrement: true,
      primaryKey: true,
      type: expect.objectContaining({
        options: {},
      }),
    }));

    expect(attributes).toHaveProperty('username');
    expect(attributes.username).toEqual(expect.objectContaining({ // This was copied 
      type: expect.objectContaining({
        _length: 255,
        options: expect.objectContaining({}),
      }),
      allowNull: false
    }));
  });
});