import {Sequelize} from 'sequelize';

const db = new Sequelize('sqlite::memory');

const connectDb = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export {db, connectDb};