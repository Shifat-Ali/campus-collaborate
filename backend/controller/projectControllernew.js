const express = require('express');
const pool = require('../db/pool');
const { z } = require('zod');
const {getTagsByProjectId} = require('../db/tagsController')
const {getVotesByProjectId} = require('../db/votesController')
const {getFeedbackByProjectId}=require('../db/commentController')
async function getAllProject(req, res) {
    let page = parseInt(req.query.page);
    console.log(page)
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
        

        sql = ` SELECT t1.id as id, project_name,tagline ,url,thumbnail,username
        FROM backend.projects as t1
        INNER JOIN backend.users as t2
        ON t1.owner_id = t2.id
        ORDER BY created_at DESC
        OFFSET ${startIndex} LIMIT ${limit};
            `
        results = await pool.query(sql)

        for(let proj of results.rows ){
          
            proj.tags = await getTagsByProjectId(proj.id);
       
            //    comment for the project to be added 

            votes = await getVotesByProjectId(proj.id);
            proj.upvotes = votes.upvotes;
            proj.downvotes = votes.downvotes;

        }
        response.projects = results.rows;
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }

}

async function getProjectById(req, res) {


try{
        
    const project_id = req.query.id;
  
    sql =`SELECT 
    t1.project_name,
    t1.tagline,
    t1.description,
    t1.votes,
    t1.multimedia,
    t1.url,
    t1.thumbnail,
    t2.username,
    t2.profile_photo
FROM 
    backend.projects AS t1
INNER JOIN 
    backend.users AS t2
ON 
    t1.owner_id = t2.id
WHERE
    t1.id = $1; -- Replace '?' with the specified project ID`



const response = {};
        const result = await pool.query(sql,[project_id])
    
        response.collaborators = getCollaboratorsByProjectId(project_id)
       response.tags = getTagsByProjectId(project_id)
        response.project = result.rows[0]
        res.status(200).json(response)
       }
    

       catch(err){
        console.log(err.message);
        res.status(500).send(err.message);
       }

}

// async function getCommentById(req,res) {

//     try {
//         const projectId = req.params.id;
//         const page = req.params.page;
//         const limit = req.params.limit;

//         // Calculate the offset based on the page and limit
//         const offset = (page - 1) * limit;

//         // Call the function to get feedback by project ID
//         const feedback = await getFeedbackByProjectId(projectId, offset, limit);

//         res.json(feedback);
//     } catch (error) {
//         console.error('Error fetching feedback:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }






async function getCollaboratorsByProjectId(project_id) {
    try {
        const projectId = project_id;
        const sql = `
            SELECT u.username
            FROM backend.collaborators AS c
            INNER JOIN backend.users AS u ON c.collaborator_id = u.id
            WHERE c.project_id = $1
        `
        const result = await pool.query(sql, [projectId]);
        
        if (result.rows.length === 0) {
            return res.status(200).json({ message: 'This project has no collaborators' });
        } else {
            const collaborators = result.rows.map(row => row.username);
            return collaborators
        }
    } catch (error) {
        console.error('Error retrieving collaborators:', error);
        
    }
}




module.exports = {
    getAllProject,
    getProjectById,
//     voteProjectById,
   
getCollaboratorsByProjectId
//     getCommentById
};
