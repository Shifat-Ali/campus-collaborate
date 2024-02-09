const pool = require('../db/pool');

async function DummyData() {
    try {
        for (let i = 0; i < 10; i++) {
            const reply_id = Math.floor(Math.random() * 999 + 1); // You can use any method to generate a user ID
            // const comment = Math.floor(Math.random() * (919) + 1000);
            // console.log(68, reply_id);
            const query = 'INSERT INTO backend.comment_reply (comment_id, reply_id) VALUES ($1, $2)';
            await pool.query(query, [791, reply_id]);
        }

        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
}

DummyData();
