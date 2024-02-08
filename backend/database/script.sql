SELECT * 
FROM backend.queries;

DELETE 
FROM backend.queries;

SELECT setval('backend.queries_id_seq',1);

SELECT *
FROM backend.tags
LIMIT 5;

SELECT query_id, COUNT(user_id)
FROM backend."queriesVotes"
GROUP BY query_id
HAVING COUNT(user_id) > 1;

SELECT * 
FROM backend."queriesVotes"
WHERE query_id = 512;

SELECT user_id, COUNT(query_id)
FROM backend."queriesVotes"
GROUP BY user_id
HAVING COUNT(query_id) > 1;


SELECT tag_name,COUNT(tag_name)
FROM backend.tags
GROUP BY tag_name
HAVING COUNT(tag_name) > 1;

SELECT * 
FROM backend.queries_tags;

SELECT t1.tag_name 
FROM backend.tags AS t1
INNER JOIN backend.queries_tags AS t2 ON t1.id = t2.tag_id
WHERE query_id = 512;

SELECT
  COUNT(CASE WHEN vote = 'up' THEN 1 END) AS upvotes,
  COUNT(CASE WHEN vote = 'down' THEN 1 END) AS downvotes
FROM
  backend."queriesVotes"
WHERE
  query_id = 512;
  
SELECT username
FROM backend.users
WHERE id = 5;

ALTER TABLE backend.courses 
RENAME decription TO description;