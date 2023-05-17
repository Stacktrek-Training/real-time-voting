/* ------------ StakcUDecide DATABASE -----------*/

CREATE TABLE usersdb(
  user_id        SERIAL PRIMARY KEY,
  user_firstname varchar(50) NOT NULL,
  user_lastname  varchar(50) NOT NULL,
  user_email     varchar(50) NOT NULL,
  user_username  varchar(50) NOT NULL,
  user_password  varchar(50) NOT NULL
);

INSERT INTO usersdb (user_firstname, 
					 user_lastname, 
					 user_email, 
					 user_username, 
					 user_password)

VALUES ('aram', 
		'marcelino', 
		'arammarcelino@gmail.com', 
		'arammarcelino17', 
		'password041701');



CREATE TABLE pollsdb
(
  poll_id    SERIAL PRIMARY KEY,
  poll_title varchar(100) NOT NULL,
  user_id INT NOT NULL REFERENCES usersdb(user_id) ON DELETE CASCADE

);

INSERT INTO pollsdb (poll_title,user_id)

VALUES ('Favorite Food',1);
VALUES ('Favorite Game',2);
VALUES ('Favorite Place',3);



CREATE TABLE votersdb
(
  voter_id   SERIAL PRIMARY KEY,
  voter_username varchar(50) NOT NULL,
  voter_email varchar(50) NOT NULL,
  voter_password varchar(50) NOT NULL,
  user_id INT NOT NULL REFERENCES usersdb(user_id) ON DELETE CASCADE
);

INSERT INTO votersdb
(
  voter_username,
  voter_email,
  voter_password,
  user_id
)

VALUES ('arammc', 'arammc@gmail.com', 'password041701', 1);



CREATE TABLE optionsdb
(
  option_id    SERIAL PRIMARY KEY,
  option_answer varchar(100) NOT NULL,
  poll_id INT NOT NULL REFERENCES pollsdb(poll_id) ON DELETE CASCADE,
  voter_id INT NOT NULL REFERENCES votersdb(voter_id) ON DELETE CASCADE
);

INSERT INTO optionsdb (option_answer,poll_id,voter_id)

VALUES ('Chicken',1,1);



CREATE TABLE votesdb
(
  vote_id   SERIAL PRIMARY KEY,
  option_id INT NOT NULL REFERENCES optionsdb(option_id) ON DELETE CASCADE
);

INSERT INTO votesdb ()

VALUES ('');

ADD CONSTRAINT fk_poll_id
FOREIGN KEY (poll_id)
REFERENCES pollsdb(poll_id);

SELECT * FROM usersdb pollsdb optionsdb votesdb;


ALTER TABLE table_name 
ADD CONSTRAINT constraint_name 
FOREIGN KEY (column_name) 
REFERENCES referenced_table_name (referenced_column_name);


CREATE TABLE votersdb (
            voter_username 
					 ,voter_email
					 ,voter_password)

INSERT INTO votersdb (voter_username 
					 ,voter_email
					 ,voter_password)

VALUES ('arammc', 'arammc@gmail.com', 'password041701');



/* ------------ FORMATS -----------*/





ALTER TABLE optionsdb
ADD CONSTRAINT fk_voter_id
FOREIGN KEY (voter_id)
REFERENCES votersdb(voter_id);

SELECT * FROM usersdb;
SELECT * FROM pollsdb;
SELECT * FROM optionsdb;
SELECT * FROM votersdb;
SELECT * FROM votesdb;

INSERT INTO pollsdb (question)

VALUES ('Favorite Food');

DELETE FROM optionsdb 
WHERE option_id = 1;

DROP TABLE optionsdb;

CREATE TABLE optionsdb
(
  option_id    SERIAL PRIMARY KEY (1,1),
  option_answer varchar(100) NOT NULL
  ON DELETE CASCADE;
);

CREATE TABLE optionsdb
(
option_id INT PRIMARY KEY,
option_answer VARCHAR(100) NOT NULL,
poll_id INT REFERENCES pollsdb(option_id),
voter_id INT REFERENCES votersdb(option_id)
)

ALTER TABLE optionsdb
ADD CONSTRAINT fk_voter_id
    FOREIGN KEY (option_id)
    REFERENCES votersdb (voter_id)
    ON DELETE CASCADE;

INSERT INTO optionsdb (poll_id, option_answer)

VALUES (2,'Pork');

CREATE TABLE votersdb
(
  voter_id   SERIAL PRIMARY KEY,
  voter_username varchar(50) NOT NULL,
  voter_email varchar(50) NOT NULL,
  voter_password varchar(50) NOT NULL
);






CREATE TABLE contacts(
   contact_id INT GENERATED ALWAYS AS IDENTITY,
   customer_id INT,
   poll_id INT,
   contact_name VARCHAR(255) NOT NULL,
   phone VARCHAR(15),
   email VARCHAR(100),
   PRIMARY KEY(contact_id),
   CONSTRAINT fk_customer
      FOREIGN KEY(customer_id) 
	  REFERENCES customers(customer_id)
	  ON DELETE CASCADE,
   CONSTRAINT fk_polls
      FOREIGN KEY(poll_id) 
	  REFERENCES polls(poll_id)
	  ON DELETE CASCADE
);




DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS customers;
ALTER TABLE tablename DROP CONSTRAINT fk_name;


SELECT * FROM usersdb
JOIN pollsdb ON usersdb.user_id = pollsdb.user_id
JOIN optionsdb ON pollsdb.poll_id = optionsdb.poll_id
JOIN votersdb ON usersdb.user_id = votersdb.user_id
JOIN optionsdb ON votersdb.voter_id = optionsdb.voter_id
JOIN votedb ON optionsdb.option_id = votedb.option_id;


SELECT * FROM usersdb
JOIN pollsdb ON usersdb.user_id = pollsdb.user_id
JOIN optionsdb AS o1 ON pollsdb.poll_id = o1.poll_id
JOIN votersdb ON usersdb.user_id = votersdb.user_id
JOIN optionsdb AS o2 ON votersdb.user_id = o2.option_id
JOIN votesdb ON votesdb.option_id = o2.option_id;


/*/////////////////// counting*/
SELECT 
   COUNT(*) 
FROM 
   table_name
WHERE
   condition;

   SELECT 
   COUNT(column_name) 
FROM 
   table_name
WHERE
   condition;


SELECT 
   COUNT(option_id) 
FROM 
   votesdb
WHERE
   option_id;
   
SELECT * FROM usersdb;
SELECT * FROM pollsdb;
SELECT * FROM optionsdb;
SELECT * FROM votersdb;
SELECT * FROM votesdb;

SELECT 
   COUNT(option_id) 
FROM 
   votesdb
WHERE
   option_id = 3;