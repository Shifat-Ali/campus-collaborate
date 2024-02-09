SET
	SEARCH_PATH TO backend;

CREATE TABLE "follows" (
	"id" serial PRIMARY KEY,
	"following_user_id" integer,
	"followed_user_id" integer,
	UNIQUE (FOLLOWING_USER_ID, FOLLOWED_USER_ID)
);

CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"username" VARCHAR(50),
	"firstname" VARCHAR(100),
	"lastname" VARCHAR(100),
	"email" VARCHAR(50) UNIQUE,
	"contact_no" VARCHAR(11),
	"about" text,
	"roll_number" VARCHAR(15),
	"profile_photo" BYTEA
);

CREATE TABLE "queries" (
	"id" serial PRIMARY KEY,
	"title" varchar,
	"body" text,
	"user_id" integer,
	"votes" integer,
	"num_answers" integer,
	"created_at" timestamp default now()
);

CREATE TABLE "courses" (
	"id" serial PRIMARY KEY,
	"title" VARCHAR(255),
	"decription" VARCHAR(1000),
	"url" text
);

CREATE TABLE "users_courses" (
	"id" serial PRIMARY KEY,
	"user_id" integer,
	"course_id" integer,
	UNIQUE (USER_ID, COURSE_ID)
);

CREATE TABLE "reviews" (
	"course_id" integer,
	"user_id" integer,
	"rating" VARCHAR(1),
	"title" VARCHAR(255),
	"description" VARCHAR(1000),
	"date" timestamp default now(),
	UNIQUE (COURSE_ID, USER_ID),
	PRIMARY KEY (COURSE_ID, USER_ID)
);

CREATE TABLE "comments" (
	"id" serial PRIMARY KEY,
	"user_id" integer,
	"body" text,
	"created_at" timestamp default now()
);

CREATE TABLE "comment_reply" (
	"id" serial PRIMARY KEY,
	"comment_id" integer,
	"reply_id" integer,
	UNIQUE (COMMENT_ID, REPLY_ID)
);

CREATE TABLE "tags" (
	"id" serial PRIMARY KEY,
	"tag_name" VARCHAR(255),
	"creator_id" integer,
	"created_at" timestamp default now()
);

CREATE TABLE "queries_tags" (
	"id" serial PRIMARY KEY,
	"query_id" integer,
	"tag_id" integer,
	UNIQUE (QUERY_ID, TAG_ID)
);

CREATE TABLE "courses_tags" (
	"id" serial PRIMARY KEY,
	"tag_id" integer,
	"course_id" integer,
	UNIQUE (TAG_ID, COURSE_ID)
);

CREATE TABLE "experience" (
	"id" serial PRIMARY KEY,
	"user_id" integer,
	"employer" VARCHAR(100) not null,
	"title" VARCHAR(50) not null,
	"start_date" date not null,
	"end_date" date,
	"description" VARCHAR(1000)
);

CREATE TABLE "certification" (
	"id" serial PRIMARY KEY,
	"user_id" integer,
	"certificate_name" VARCHAR(100),
	"issued_by" VARCHAR(255) not null,
	"url" text,
	"issue_date" date not null,
	"expiry_date" date
);

CREATE TABLE "skills" (
	"id" serial PRIMARY KEY,
	"tag_id" integer,
	"user_id" integer,
	UNIQUE (TAG_ID, USER_ID)
);

CREATE TABLE "projects" (
	"id" serial PRIMARY KEY,
	"owner_id" integer,
	"project_name" VARCHAR(50),
	"tagline" VARCHAR(150),
	"votes" integer,
	"url" text,
	"status" VARCHAR(20) CHECK ("status" IN ('completed', 'working')),
	"thumbnail" BYTEA,
	"description" VARCHAR(5000),
	"multimedia" BYTEA,
	"created_at" date default current_date
);

CREATE TABLE "project_tags" (
	"id" serial PRIMARY KEY,
	"tag_id" integer,
	"project_id" integer,
	UNIQUE (TAG_ID, PROJECT_ID)
);

CREATE TABLE "feedback" (
	"id" serial PRIMARY KEY,
	"project_id" integer,
	"comment_id" integer,
	UNIQUE (PROJECT_ID, COMMENT_ID)
);

CREATE TABLE "collaborators" (
	"id" serial PRIMARY KEY,
	"project_id" integer,
	"collaborator_id" integer,
	UNIQUE (PROJECT_ID, COLLABORATOR_ID)
);

CREATE TABLE "recommendation" (
	"id" serial PRIMARY KEY,
	"recommender_id" integer,
	"reciepient_id" integer,
	"description" VARCHAR(1000),
	"date" date default current_date
);

CREATE TABLE "projectVotes" (
	"user_id" integer,
	"project_id" integer,
	"vote" VARCHAR(20) CHECK ("vote" IN ('up', 'down')),
	PRIMARY KEY (USER_ID, PROJECT_ID)
);

CREATE TABLE "queriesVotes" (
	"user_id" integer,
	"query_id" integer,
	"vote" VARCHAR(20) CHECK ("vote" IN ('up', 'down')),
	PRIMARY KEY (USER_ID, QUERY_ID)
);

CREATE TABLE "commentVotes" (
	"comment_id" integer,
	"user_id" integer,
	"vote" VARCHAR(20) CHECK ("vote" IN ('up', 'down')),
	PRIMARY KEY (USER_ID, COMMENT_ID)
);

CREATE TABLE "answer" (
	"id" serial PRIMARY KEY,
	"query_id" integer,
	"comment_id" integer,
	UNIQUE(QUERY_ID, COMMENT_ID)
);

ALTER TABLE
	"answer"
ADD
	FOREIGN KEY ("query_id") REFERENCES "queries" ("id") ON DELETE CASCADE;

ALTER TABLE
	"answer"
ADD
	FOREIGN KEY ("comment_id") REFERENCES "comments" ("id") ON DELETE CASCADE;

ALTER TABLE
	"commentVotes"
ADD
	FOREIGN KEY ("comment_id") REFERENCES "comments" ("id") ON DELETE CASCADE;

ALTER TABLE
	"commentVotes"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"queriesVotes"
ADD
	FOREIGN KEY ("query_id") REFERENCES "queries" ("id") ON DELETE CASCADE;

ALTER TABLE
	"queriesVotes"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"projectVotes"
ADD
	FOREIGN KEY ("project_id") REFERENCES "projects" ("id") ON DELETE CASCADE;

ALTER TABLE
	"projectVotes"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"project_tags"
ADD
	FOREIGN KEY ("project_id") REFERENCES "projects" ("id") ON DELETE CASCADE;

ALTER TABLE
	"project_tags"
ADD
	FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE CASCADE;

ALTER TABLE
	"recommendation"
ADD
	FOREIGN KEY ("recommender_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"recommendation"
ADD
	FOREIGN KEY ("reciepient_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"collaborators"
ADD
	FOREIGN KEY ("project_id") REFERENCES "projects" ("id") ON DELETE CASCADE;

ALTER TABLE
	"collaborators"
ADD
	FOREIGN KEY ("collaborator_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"feedback"
ADD
	FOREIGN KEY ("project_id") REFERENCES "projects" ("id") ON DELETE CASCADE;

ALTER TABLE
	"feedback"
ADD
	FOREIGN KEY ("comment_id") REFERENCES "comments" ("id") ON DELETE CASCADE;

ALTER TABLE
	"projects"
ADD
	FOREIGN KEY ("owner_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"certification"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"skills"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"skills"
ADD
	FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE CASCADE;

ALTER TABLE
	"comment_reply"
ADD
	FOREIGN KEY ("comment_id") REFERENCES "comments" ("id") ON DELETE CASCADE;

ALTER TABLE
	"comment_reply"
ADD
	FOREIGN KEY ("reply_id") REFERENCES "comments" ("id") ON DELETE CASCADE;

ALTER TABLE
	"users_courses"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"users_courses"
ADD
	FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE
	"experience"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"courses_tags"
ADD
	FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE CASCADE;

ALTER TABLE
	"courses_tags"
ADD
	FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE
	"queries_tags"
ADD
	FOREIGN KEY ("query_id") REFERENCES "queries" ("id") ON DELETE CASCADE;

ALTER TABLE
	"queries_tags"
ADD
	FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE CASCADE;

ALTER TABLE
	"tags"
ADD
	FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"comments"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"reviews"
ADD
	FOREIGN KEY ("course_id") REFERENCES "courses" ("id");

ALTER TABLE
	"reviews"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"queries"
ADD
	FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"follows"
ADD
	FOREIGN KEY ("following_user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
	"follows"
ADD
	FOREIGN KEY ("followed_user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

-- SELECT
-- 	TABLENAME
-- FROM
-- 	PG_TABLES
-- WHERE
-- 	SCHEMANAME = 'public';
-- INSERT INTO
-- 	PUBLIC.USERS (
-- 		"username",
-- 		"firstName",
-- 		"lastName",
-- 		"email",
-- 		"contact_no",
-- 		"about"
-- 	)
-- VALUES
-- 	(
-- 		'spiderman',
-- 		'Tom',
-- 		'Holland',
-- 		'spiderman@marve.com',
-- 		'1234567890',
-- 		'I am spider man. Whoo !!'
-- 	);
-- INSERT INTO
-- 	PUBLIC.USERS (
-- 		id,
-- 		username,
-- 		firstName,
-- 		lastName,
-- 		email,
-- 		contact_no,
-- 		about
-- 	)
-- VALUES
-- 	(
-- 		2,
-- 		'ironman',
-- 		'Robert',
-- 		'Drowney Jr.',
-- 		'ironman@marvel.com',
-- 		'1234569804',
-- 		'I am ironman. yeah !!'
-- 	);
-- SELECT
-- 	*
-- FROM
-- 	PUBLIC.USERS;
-- alter table
-- 	public.tags
-- alter column
-- 	created_at
-- set
-- 	default now();
-- COPY tags(tag_name, creator_id)
-- FROM
-- 	'C:\Users\Shifat\Downloads\MOCK_DATA.csv' DELIMITER ',' CSV;
-- select
-- 	*
-- from
-- 	tags;