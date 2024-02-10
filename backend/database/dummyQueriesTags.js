const pool = require('../db/pool');

async function DummyData() {
    try {
        for (let i = 0; i < 1000; i++) {
            const tag_id = Math.floor(Math.random() * (425) + 1); // You can use any method to generate a user ID
            const query_id = Math.floor(Math.random() * (919) + 1);
            console.log(tag_id, query_id);
            const query = 'INSERT INTO backend.queries_tags (query_id, tag_id) VALUES ($1, $2)';
            await pool.query(query, [query_id, tag_id]);
        }

        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
}

DummyData();
