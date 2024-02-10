const { faker } = require('@faker-js/faker');
const pool = require('../db/pool');

async function insertDummyData() {
    try {

        for (let i = 0; i < 20; i++) {
            const title = faker.hacker.adjective(); // Using the "hacker" category for more technical titlesx
            const description = faker.lorem.paragraphs(); // Using the "lorem" category for diverse and reali
            const url = faker.internet.url();
            const query = 'INSERT INTO backend.courses (title, description, url) VALUES ($1, $2, $3)';
            await pool.query(query, [title, description, url]);
            console.log(title, description, url);
        }

        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error.message);
    }
}

insertDummyData();
