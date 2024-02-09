const pool = require('./pool')

async function getTagsByQueryId(query_id) {
    try {
        sql = `
        SELECT t1.tag_name
        FROM backend.tags AS t1
        INNER JOIN backend.queries_tags AS t2 ON t1.id = t2.tag_id
        WHERE query_id = ${query_id};
    `
        results = await (pool.query(sql));
        let tags = [];
        for (let tag of results.rows) {
            tags.push(tag.tag_name);
        }
        return tags;
    }
    catch (err) {
        throw err;
    }
}

async function getTagsByProjectId(project_id) {
    try {
        sql = `
        SELECT t1.tag_name
        FROM backend.tags AS t1
        INNER JOIN backend.project_tags AS t2 
        ON t1.id = t2.tag_id
        WHERE project_id = ${project_id};
    `
        results = await (pool.query(sql));
        let tags = [];
        for (let tag of results.rows) {
            tags.push(tag.tag_name);
        }
        return tags;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getTagsByQueryId,
    getTagsByProjectId
}