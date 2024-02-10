const pool = require('../db/pool');

async function DummyData() {
    try {
        for (let i = 0; i < 1000; i++) {
            const user_id = Math.floor(Math.random() * (999) + 1); // You can use any method to generate a user ID
            const query_id = Math.floor(Math.random() * (919) + 1);
            const vote = Math.floor(Math.random() * (48)) % 2 == 0 ? 'up' : 'down';
            console.log(user_id, query_id, vote);
            const query = 'INSERT INTO backend."queriesVotes" (user_id, query_id, vote) VALUES ($1, $2, $3)';
            await pool.query(query, [user_id, query_id, vote]);
        }

        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
}

DummyData();
