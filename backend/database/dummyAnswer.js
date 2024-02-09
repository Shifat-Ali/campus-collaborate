const pool = require('../db/pool');

async function DummyData() {
    try {
        for (let i = 0; i < 5; i++) {
            const comment_id = Math.floor(Math.random() * 999 + 1); // You can use any method to generate a user ID
            // const query_id = Math.floor(Math.random() * (919) + 1000);
            // console.log(comment_id, query_id);
            const query = 'INSERT INTO backend.answer (query_id, comment_id) VALUES ($1, $2)';
            await pool.query(query, [838, comment_id]);
        }

        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
}

DummyData();
