const { faker } = require('@faker-js/faker');
const pool = require('../db/pool');

async function insertDummyData() {
    try {

        for (let i = 0; i < 5; i++) {
            const title = faker.hacker.adjective(); // Using the "hacker" category for more technical titlesx
            const employer = faker.company.name(); // Using the "hacker" category for more technical titlesx
            const description = faker.lorem.paragraphs(); // Using the "lorem" category for diverse and realistic descriptions
            const user_id = Math.floor(Math.random() * 999 + 1); // You can use any method to generate a user ID
            const start_date = faker.date.between({ from: '2024-02-03T00:00:00.000Z', to: '2024-02-10T00:00:00.000Z' })
            end_date = start_date;
            while (end_date <= start_date) {
                end_date = faker.date.between({ from: '2024-02-03T00:00:00.000Z', to: '2024-02-10T00:00:00.000Z' })
            }
            const query = 'INSERT INTO backend.experience (user_id, employer, title, start_date, end_date, description) VALUES ($1, $2, $3, $4, $5, $6)';
            await pool.query(query, [user_id, employer, title, start_date, end_date, description]);
            console.log(user_id, employer, title, start_date, end_date, description);
        }

        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error.message);
    }
}

insertDummyData();
