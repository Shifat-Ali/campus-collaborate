const pool = require('../db/pool');

async function DummyData() {
    try {
        for (let i = 0; i < 100; i++) {
            const comment_id = Math.floor(Math.random() * 999 + 1); // You can use any method to generate a user ID
            const project_id = Math.floor(Math.random() * (19) + 1);
            // console.log(comment_id, query_id);
            const query = 'INSERT INTO backend.feedback (project_id, comment_id) VALUES ($1, $2)';
            await pool.query(query, [project_id, comment_id]);
        }

        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
}

DummyData();
