SELECT *
FROM user_course_ratings;

ALTER TABLE backend.user_course_ratings
ALTER COLUMN course_relevance_rating 
TYPE integer
USING course_relevance_rating::integer,
ALTER COLUMN understandability_rating
TYPE integer
USING understandability_rating::integer,
ALTER COLUMN ease_of_scoring_rating
TYPE integer
USING ease_of_scoring_rating::integer,
ALTER COLUMN faculty_rating
TYPE integer
USING faculty_rating::integer;

SELECT *
FROM backend.user_course_ratings;

ALTER TABLE backend.experience
ADD CONSTRAINT end_date_check
CHECK(start_date < end_date);

SELECT *
FROM backend.follows;

SELECT *
FROM backend.experience;

SELECT *
FROM backend.courses_tags;

SELECT *
FROM backend.courses;

SELECT *
FROM backend.skills;

SELECT *
FROM backend.recommendation;

SELECT *
FROM backend.courses;

SELECT *
FROM backend.queries
LIMIT 5;

SELECT *
FROM backend.users;

