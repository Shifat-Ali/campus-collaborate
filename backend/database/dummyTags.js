const { faker } = require('@faker-js/faker');
const pool = require('../db/pool');

async function insertDummyData() {
    try {

        for (let i = 0; i < 1000; i++) {
            const tag_name = faker.hacker.adjective(); // Using the "hacker" category for more technical titles
            const creator_Id = Math.floor(Math.random() * (999) + 1); // You can use any method to generate a user ID
            const created_at = faker.date.between({ from: '2024-02-03T00:00:00.000Z', to: '2024-02-10T00:00:00.000Z' })
            const query = 'INSERT INTO backend.tags (tag_name, creator_id, created_at) VALUES ($1, $2, $3)';
            console.log(tag_name, creator_Id, created_at);
            await pool.query(query, [tag_name, creator_Id, created_at]);
        }

        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error.message);
    }
}

insertDummyData();
