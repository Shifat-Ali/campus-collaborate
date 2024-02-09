const z = require('zod');
const pool = require('../db/pool');
async function getProjectsByUserId(req, res) {
    try {
        const userId = req.body.userId;

        // Construct the SQL query to retrieve projects for a particular user
        const sql = `
            SELECT p.id, p.project_name, p.tagline, p.description
            FROM backend.projects p
            INNER JOIN backend.collaborators c ON p.id = c.project_id
            INNER JOIN backend.users u ON c.collaborator_id = u.id
            WHERE u.id = $1;
        `;
        
        // Execute the query to retrieve projects for the user
        const result = await pool.query(sql, [userId]);

        // Return the fetched projects
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error retrieving projects by user ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}





const ImageOrURL = z.union([
    z.string().url(), // Accepts a valid URL
    z.instanceof(Buffer) // Accepts binary data (e.g., Buffer)
]);
const projectSchema = z.object({
    owner_id: z.number(),
    project_name: z.string().max(50),
    tagline: z.string().max(150),
    votes: z.number().optional(),
    url: z.string().url().max(500),
    thumbnail: ImageOrURL.optional(), // Use the custom union type for thumbnail
    description: z.string().max(5000),
    multimedia: ImageOrURL.optional() // Use the custom union type for multimedia
});

async function insertProject(req, res) {
    let projectData  = req.body;
  
    try {
     
       
        // If the thumbnail field is a URL, leave it as is.
        // If it's binary data (e.g., Buffer), convert it to a Base64-encoded string.
        if (Buffer.isBuffer(projectData.thumbnail)) {
            projectData.thumbnail = projectData.thumbnail.toString('base64');
        }

        // If the multimedia field is a URL, leave it as is.
        // If it's binary data (e.g., Buffer), convert it to a Base64-encoded string.
        if (Buffer.isBuffer(projectData.multimedia)) {
            projectData.multimedia = projectData.multimedia.toString('base64');
        }

        const validatedData = projectSchema.parse(projectData);
            
        const result = await pool.query(
            'INSERT INTO backend.projects (owner_id, project_name, tagline, votes, url, thumbnail, description, multimedia) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [
                validatedData.owner_id,
                validatedData.project_name,
                validatedData.tagline,
                validatedData.votes || null,
                validatedData.url || null,
                validatedData.thumbnail,
                validatedData.description,
                validatedData.multimedia || null
            ]
        );

        console.log('Inserted project:', result.rows[0]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Validation failed or database error:', error);
        res.status(400).json({ error: 'Invalid input' });
    
}
}



async function updateProject(req, res) {
    const projectId = req.body.project_id; // Assuming the project ID is passed in the URL parameter
    const userId = req.body.user_id; // Assuming the user ID is available in the request object (after authentication)
    const updateData = req.body.data;

    try {
        // Validate the update data against the project schema
        const validatedData = projectSchema.parse(updateData);

        // If the thumbnail field is a Buffer, convert it to a Base64-encoded string
        if (Buffer.isBuffer(validatedData.thumbnail)) {
            validatedData.thumbnail = validatedData.thumbnail.toString('base64');
        }

        // If the multimedia field is a Buffer, convert it to a Base64-encoded string
        if (Buffer.isBuffer(validatedData.multimedia)) {
            validatedData.multimedia = validatedData.multimedia.toString('base64');
        }

        // Check if the project with the given ID belongs to the user who is editing
        const checkOwnershipQuery = `
            SELECT owner_id FROM backend.projects WHERE id = $1;
        `;
        const ownershipResult = await pool.query(checkOwnershipQuery, [projectId]);

        if (ownershipResult.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        const ownerId = ownershipResult.rows[0].owner_id;
        if (ownerId !== userId) {
            return res.status(403).json({ error: 'Unauthorized' }); // User is not authorized to update this project
        }

        // Construct the SQL query for updating the project
        const query = `
            UPDATE backend.projects
            SET 
                owner_id = $1,
                project_name = $2,
                tagline = $3,
                votes = $4,
                url = $5,
                thumbnail = $6,
                description = $7,
                multimedia = $8
            WHERE id = $9
            RETURNING *;
        `;
        
        // Execute the query with the updated data
        const result = await pool.query(query, [
            validatedData.owner_id,
            validatedData.project_name,
            validatedData.tagline,
            validatedData.votes || null,
            validatedData.url || null,
            validatedData.thumbnail,
            validatedData.description,
            validatedData.multimedia || null,
            projectId
        ]);

        // Check if the update was successful
        if (result.rowCount > 0) {
            console.log('Updated project:', result.rows[0]);
            res.status(200).json(result.rows[0]); // Send the updated project as response
        } else {
            res.status(404).json({ error: 'Project not found' }); // Project with the given ID not found
        }
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(400).json({ error: 'Invalid input' }); // Invalid input data
    }
}

async function deleteProject(req, res) {
    const projectId = req.body.project_id; 
    const userId = req.body.user_id; 
    try {
        // Check if the project with the given ID belongs to the user who is deleting
        const checkOwnershipQuery = `
            SELECT owner_id FROM backend.projects WHERE id = $1;
        `;
        const ownershipResult = await pool.query(checkOwnershipQuery, [projectId]);

        if (ownershipResult.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        const ownerId = ownershipResult.rows[0].owner_id;
        if (ownerId !== userId) {
            return res.status(403).json({ error: 'Unauthorized' }); // User is not authorized to delete this project
        }

        // Construct the SQL query for deleting the project
        const query = `
            DELETE FROM backend.projects WHERE id = $1;
        `;
        
        // Execute the query to delete the project
        const result = await pool.query(query, [projectId]);

        // Check if the delete operation was successful
        if (result.rowCount > 0) {
            console.log('Deleted project with ID:', projectId);
            res.status(204).send(); // Send a success response with no content
        } else {
            res.status(404).json({ error: 'Project not found' }); // Project with the given ID not found
        }
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Internal server error' }); // Server error
    }
}

module.exports={
    insertProject,
    updateProject,
    deleteProject,
    getProjectsByUserId
}