const { faker } = require('@faker-js/faker');

const pool = require('../db/pool');

// Define the PostgreSQL connection pool


// Define custom union types
// const ImageOrURL = z.union([
//     z.string().url(), // Accepts a valid URL
//     z.instanceof(Buffer) // Accepts binary data (e.g., Buffer)
// ]);

// Define the project schema


// Function to generate fake project data
function generateFakeProject() {
    return {
        owner_id: faker.datatype.number(),
        project_name: faker.lorem.words(3),
        tagline: faker.lorem.sentence(),
        votes: faker.datatype.number({ min: 0, max: 1000 }),
        url: faker.internet.url(),
        thumbnail: generateImageOrURL(), // Generate fake data for the thumbnail
        description: faker.lorem.paragraph(),
        multimedia: generateImageOrURL() // Generate fake data for the multimedia
    };
}

// Function to generate fake data for ImageOrURL union type
function generateImageOrURL() {
    const dataType = faker.random.arrayElement(['url', 'binary']);
    switch (dataType) {
        case 'url':
            return faker.internet.url();
        case 'binary':
            // Generate random binary data (e.g., Buffer)
            return Buffer.from(faker.random.alphaNumeric(10));
        default:
            return null;
    }
}

// Function to insert fake project data into the database
async function insertFakeProjects(numProjects) {

    try {
        for (let i = 0; i < numProjects; i++) {
            const fakeProject = generateFakeProject();
            const result = await pool.query(
                'INSERT INTO backend.projects (owner_id, project_name, tagline, votes, url, thumbnail, description, multimedia) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [
                    fakeProject.owner_id,
                    fakeProject.project_name,
                    fakeProject.tagline,
                    fakeProject.votes || null,
                    fakeProject.url || null,
                    fakeProject.thumbnail,
                    fakeProject.description,
                    fakeProject.multimedia || null
                ]
            );

            console.log('Inserted project:', result.rows[0]);
        }
    } catch (error) {
        console.error('Error inserting fake projects:', error);
    }
}
insertFakeProjects(20);
// Call the function with the desired number of fake projects to insert
// Inserting 10 fake projects as an example
module.exports = { insertFakeProjects }
