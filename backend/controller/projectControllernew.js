const express = require('express');
const pool = require('../db/pool');
const { z } = require('zod');

async function getAllProject(req, res) {
    let page = parseInt(req.query.page);
   let limit = parseInt(req.query.limit);
    const maxLimit = 20;
    if (isNaN(limit) || limit > maxLimit) limit = maxLimit;
    if (isNaN(page)) page = 1;
    try {
        const response = {};
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let results = await pool.query("SELECT COUNT(id) FROM backend.projects");
        const count = results.rows[0].count;
        if (page > 1) {
            response.previous = {
                page: page - 1,
                limit: limit,
            }
        }
        if (endIndex < count) {
            response.next = {
                page: page + 1,
                limit: limit,
            }
        }

        

        sql = ` SELECT *
                FROM backend.projects
                ORDER BY created_at DESC
                OFFSET ${startIndex} LIMIT ${limit};
            `
        results = await pool.query(sql)


        response.projects = results.rows;
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }

}

// async function getProjectById(req, res) {
//     try {
//         const user_id = req.query.user_id;
//         const fromDate = new Date();
//         const result = await pool.query("SELECT * FROM backend.projects WHERE owner_id = user_id");

//         console.log(result.row);
//         const toDate = new Date();

//         const response = {
//             rows: result.rows,
//             elapsed: toDate.getTime() - fromDate.getTime(),
//             method: 'pool'
//         };
//         res.status(200).json(response);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send(err.message);
//     }
// }

// async function voteProjectById(req, res) {
//     try {
//         const sql = `
//             SELECT
//                 COUNT(CASE WHEN vote = 'up' THEN 1 END) AS upvotes,
//                 COUNT(CASE WHEN vote = 'down' THEN 1 END) AS downvotes
//             FROM backend."projectvotes"
//             WHERE query_id = 512;
//         `;
//         const results = await pool.query(sql);
//         return results.rows[0];
//     } catch (err) {
//         throw err;
// //     }
// }

// Define a schema using Zod
const projectSchema = z.object({
    owner_id: z.number(),
    project_name: z.string().max(50),
    tagline: z.string().max(150),
    votes: z.number().optional(),
    url: z.string().url().max(500),
    thumbnail: z.string(),
    description: z.string().max(5000),
    multimedia: z.string().optional()
});

async function insertProject(req, res) {
    let projectData = req.body;
    console.log(projectData);

    try {
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

// async function getCollaboraterByProjectId(req, res) {
//     try {
//         const projectId = req.query.project_id;
//         const sql = `SELECT *
//                      FROM backend.collaborators
//                      JOIN project ON project.id =collaborators.project_id
//                      JOIN user ON user.id = collaborators.collaborators_id
//                      WHERE project_id =$1`;
//         const result = await pool.query(sql, [projectId]);
//         if (result.rows.length === 0) {
//             res.status(200).json({ message: 'This project has no collaborators' });
//         } else {
//             return result.rows;
//         }
//     } catch (error) {
//         console.error('Validation failed or database error:', error);
//     }
// }

// async function getCommentById(req, res) {
//     const projectId = req.query.projec_id;
//     // Implement your logic here
// }

module.exports = {
    getAllProject,
//     getProjectById,
//     voteProjectById,
    insertProject
//     getCollaboraterByProjectId,
//     getCommentById
};
